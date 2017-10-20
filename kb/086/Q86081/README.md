---
layout: page
title: "Q86081: PRB: DLL Function Returns Float or Double Value Incorrectly"
permalink: /kb/086/Q86081/
---

## Q86081: PRB: DLL Function Returns Float or Double Value Incorrectly

{% raw %}

	Article: Q86081
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a function using the C calling convention and exported from a dynamic- link
	library (DLL) returns a data value of type float, double, or long double, the
	calling application receives unexpected values.
	
	CAUSE
	=====
	
	The pointer used to return a floating-point result under the C calling
	convention is invalid once control returns to the application.
	
	RESOLUTION
	==========
	
	Declare the DLL function using the Pascal calling convention or allocate memory
	from the global heap to hold the floating-point result and return the handle
	from the DLL function.
	
	MORE INFORMATION
	================
	
	The DLL and any application that calls the DLL each have separate floating-point
	accumulators. When an application calls a DLL function declared with the Pascal
	calling convention, the application allocates space on the stack to receive the
	returned data type. The DLL function pushes the value onto the stack for the
	application to use.
	
	When an application calls a DLL function that uses the C calling convention, no
	stack space is allocated because the calling function cleans up the stack. Under
	the C calling convention, the DLL function returns a pointer (in DX:AX) to the
	floating-point accumulator, which contains the result. However, once the
	application regains control, the pointer is not valid.
	
	The code examples below demonstrate returning a float value under the C and
	Pascal calling conventions:
	
	C Calling Convention
	--------------------
	
	  // C calling convention - DLL
	  // Compile options required: /Asw /G2sw /Zp
	
	  HANDLE _far floatcalc(float fl1, float fl2);
	
	  HANDLE _far floatcalc(float fl1, float fl2)
	  {
	     HANDLE hFloat;
	     float _far *pFloat;
	
	     hFloat = GlobalAlloc(GMEM_MOVEABLE, sizeof(float));
	     pFloat = (float _far *)GlobalLock(hFloat);
	     *pFloat = fl1 * fl2;
	     GlobalUnlock(hFloat);
	     return hFloat;
	  }
	
	  // C calling convention - Application
	  // Compile options required: /AS /G2sw /Zp
	
	  extern HANDLE _far floatcalc(float fl1, float  fl2);
	
	  void Calc(void)
	  {
	     float _far *pFloat, fl;
	     HANDLE lFloat;
	
	     lFloat = floatcalc((float)3.0, (float)4.1);  // Call DLL function
	     pFloat = (float _far *)GlobalLock(lFloat);
	     fl = *pFloat;
	     GlobalFree(lFloat);
	  }
	
	Pascal Calling Convention
	-------------------------
	
	  // Pascal calling convention - DLL
	  // Compile options required: /Asw /G2sw /Zp
	
	  float _far _pascal FloatCalc(float fl1, float fl2);
	
	  float _far _pascal FloatCalc(float fl1, float fl2)
	  {
	  return fl1 * fl2;
	  }
	
	  // Pascal calling convention - Application
	  // Compile options required: /G2sw /Zp
	
	  extern float _far _pascal FloatCalc(float fl1, float fl2);
	
	  void Calc(void)
	  {
	     float temp;
	
	     temp = FloatCalc((float)3.1, (float)4.2);  // Call DLL function
	  }
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	

{% endraw %}
