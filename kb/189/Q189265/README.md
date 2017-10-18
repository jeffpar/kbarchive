---
layout: page
title: "Q189265: INFO: Microsoft Graph Constants"
permalink: kb/189/Q189265/
---

## Q189265: INFO: Microsoft Graph Constants

	Article: Q189265
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Visual FoxPro includes Microsoft Graph for graphing from Visual
	FoxPro. When working with Microsoft Graph, it may be useful to have the Graph
	constants defined as opposed to using integer values directly. The code in the
	"More Information" section can be used to reference the Graph constants.
	
	You can see the constants available with Microsoft Graph by using the OLE- COM
	Viewer that is available with Visual C++ in the Platform SDK.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	     *-- Code begins here.
	        *-- msgraph.h
	        *-- Microsoft Graph defines for Microsoft Graph constants.
	
	        #define xlZero                    2
	        #define xlY                       1
	        #define xlXYScatter               -4169
	        #define xlX                       -4168
	        #define xlWizardDisplayNever      2
	        #define xlWizardDisplayDefault    0
	        #define xlWizardDisplayAlways     1
	        #define xlVertical                -4166
	        #define xlValue                   2
	        #define xlUpward                  -4171
	        #define xlUp                      -4162
	        #define xlTriangle                3
	        #define xlTransparent             2
	        #define xlTop                     -4160
	        #define xlThin                    2
	        #define xlThick                   4
	        #define xlStretch                 1
	        #define xlStError                 4
	        #define xlStDev                   -4155
	        #define xlStar                    5
	        #define xlStack                   2
	        #define xlSquare                  1
	        #define xlSolid                   1
	        #define xlSingleAccounting        4
	        #define xlSingle                  2
	        #define xlShowValue               2
	        #define xlShowPercent             3
	        #define xlShowLabelAndPercent     5
	        #define xlShowLabel               4
	        #define xlSeries                  3
	        #define xlSemiGray                7510
	        #define xlSecondary               2
	        #define xlScale                   3
	        #define xlRows                    1
	        #define xlRight                   -4152
	        #define xlRadar                   -4151
	        #define xlPrimary                 1
	        #define xlPower                   4
	        #define xlPolynomial              3
	        #define xlPlusValues              2
	        #define xlPlus                    9
	        #define xlPie                     5
	        #define xlPicture                 -4147
	        #define xlPercent                 2
	        #define xlOutside                 3
	        #define xlOpaque                  3
	        #define xlNotPlotted              1
	        #define xlNormal                  -4143
	        #define xlNone                    -4142
	        #define xlNoCap                   2
	        #define xlNextToAxis              4
	        #define xlMovingAvg               6
	        #define xlMinusValues             3
	        #define xlMinimum                 4
	        #define xlMinimized               -4140
	        #define xlMedium                  -4138
	        #define xlMaximum                 2
	        #define xlMaximized               -4137
	        #define xlLow                     -4134
	        #define xlLogarithmic             -4133
	        #define xlLinear                  -4132
	        #define xlLine                    4
	        #define xlLightVertical           12
	        #define xlLightUp                 14
	        #define xlLightHorizontal         11
	        #define xlLightDown               13
	        #define xlLeft                    -4131
	        #define xlJustify                 -4130
	        #define xlInterpolated            3
	        #define xlInside                  2
	        #define xlHorizontal              -4128
	        #define xlHigh                    -4127
	        #define xlHairline                1
	        #define xlGrid                    15
	        #define xlGray8                   18
	        #define xlGray75                  -4126
	        #define xlGray50                  -4125
	        #define xlGray25                  -4124
	        #define xlGray16                  17
	        #define xlFixedValue              1
	        #define xlExponential             5
	        #define xlDownward                -4170
	        #define xlDown                    -4121
	        #define xlDoughnut                -4120
	        #define xlDoubleAccounting        5
	        #define xlDouble                  -4119
	        #define xlDot                     -4118
	        #define xlDistributed             -4117
	        #define xlDiamond                 2
	        #define xlDefaultAutoFormat       -1
	        #define xlDashDotDot              5
	        #define xlDashDot                 4
	        #define xlDash                    -4115
	        #define xlCustom                  -4114
	        #define xlCross                   4
	        #define xlCrissCross              16
	        #define xlCorner                  2
	        #define xlContinuous              1
	        #define xlCombination             -4111
	        #define xlColumns                 2
	        #define xlColumn                  3
	        #define xlCircle                  8
	        #define xlChecker                 9
	        #define xlCenter                  -4108
	        #define xlCategory                1
	        #define xlCap                     1
	        #define xlBuiltIn                 0
	        #define xlBottom                  -4107
	        #define xlBoth                    1
	        #define xlBar                     2
	        #define xlAutomatic               -4105
	        #define xlArea                    1
	        #define xl3DSurface               -4103
	        #define xl3DPie                   -4102
	        #define xl3DLine                  -4101
	        #define xl3DColumn                -4100
	        #define xl3DBar                   -4099
	        #define xl3DArea                  -409
	        *-- Code ends here
	
	Additional query words: kbDSupport kbDSE kbVFp300 kbVFp500 kbVFp300a kbVFp500a kbInterOp
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a
	Issue type        : kbinfo
	
	=============================================================================
	
