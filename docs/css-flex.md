---
id: flex
title: Flex 布局
sidebar_label: Flex 布局
---

### Flex的方向: 主轴与辅轴
- 沿主轴的叫做排布(justification)
- 沿辅助的叫做对齐(alignment)

 指定个别项的外边距 margin-right: auto, 外边距就会扩展占据可用空间


### 可伸缩尺寸
- 控制项目在主轴方向上的大小(width, height)
flex-basis: auto , 可以是长度值(18em), 百分比(相对于容器的主轴而言)

- 弹性系数
flex-grow: 0, 从flex-basis 里取得尺寸就不再扩展    

flex-shrink: 1 与flex-grow类似，作用相反，如果空间不够，该项如何收缩

要理解flex-basis, flex-grow, flex-shrink 的关系，可并不容易,但是，如果将计算过程简化为以下两个步骤，那么理解起来就容易多了  

1. 检查flex-basis, 确定假想的主尺寸
2. 确定实际的主尺寸,如果按照假想的主尺寸把各项排布好之后, 容易内还有剩余空间,那么它们可以伸展  
伸展多少由flex-grow系数决定。相应地,如果容器装不下那么多项,则根据flex-shrink系数决定各项如何收缩

例子:

假设容器宽度是1000px, 这个容器包含两个子元素, short, long, 前者占据200px;后者占据400px

![flex](http://jassets.oss-cn-beijing.aliyuncs.com/2020/2020-3-29.jpeg)

如果这两项的flex-basis的值都是auto，而且都没有设置width属性,那么当它们放到容器时,它们会依据自身内容确定宽度,如图, 一共会占据600像素

因为有剩余空间可分配,所以可以考虑flex-grow了, 默认情况下flex-grow的值为0,

给两份都设置flex-grow: 1, 表示剩余400px两项 平均分配, 也就是每项200px

分别设置不同的flex-grow
```css
.short { flex-grow: 3 }

.long { flex-grow: 1 }
```
第一项分的3/4， 第二项分的1/4，结果就是两项各站500px的宽度


#### 纯粹按伸缩系数来计算
因为flex-basis的默认值是auto, 而且也没有给项目设定明确的宽度,假如第一步中flex-basic的值是0, 
那么这一步就不会给项目分配空间了，这种情况下，容器内部的全部空间都会留到第二步再分配，就是根据伸缩系数切分，然后将最终尺寸指定给具体的项目

flex 这个简写值可以一次性设置 flex-grow flex-shrink flex-basis属性
```css
.nav li { 
    flex: 1 0 0%
}
```
最后一个flex-basic值加了百分号，这是因为简写中flex-basic必须带单位，因此这里要么加百分比，要么就写成0px

