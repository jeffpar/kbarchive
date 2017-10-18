---
layout: page
title: "Q241862: BUG: ClassWizard Omits Methods with BYTE or BYTE&#42; As Parameters"
permalink: kb/241/Q241862/
---

## Q241862: BUG: ClassWizard Omits Methods with BYTE or BYTE&#42; As Parameters

	Article: Q241862
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbAutomation kbCOMt kbCtrl kbMFC kbVC400bug kbVC500bug kbVC600bug kbClassWizard kbCompG
	Last Modified: 02-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The ClassWizard, included with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- The Component Gallery, included with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When generating wrapper classes for a COM server that has methods that take a
	BYTE or BYTE* as a parameter, the MFC wizards do not generate code for these
	methods. The wizard does place a comment in the wrapper class header file that
	states that the method was not emitted due to an invalid return type or
	parameter type. Following is the exact text:
	
	  // Operations
	  public:
	  // method 'PassByte' not emitted because of invalid return type or parameter type
	
	BYTE and BYTE* are both OLE Automation compatible data types, thus this message
	can be somewhat confusing.
	
	CAUSE
	=====
	
	This is due to bugs in ClassWizard and Component Gallery not recognizing BYTE
	and BYTE* as valid OLE Automation data types.
	
	RESOLUTION
	==========
	
	You can add the methods that were omitted manually. For example, given a method
	PassByte that takes a single BYTE parameter and another method PassBytePointer
	that takes a single BYTE* parameter, you could add the following code to the
	wrapper class in the wrapper class header file as follows:
	
	  // Operations
	  public:
	  // method 'PassByte' not emitted because of invalid return type or parameter type
	     void PassByte(BYTE byteVal);
	
	  // method 'PassBytePointer' not emitted because of invalid return type or parameter type
	     void PassBytePointer(BYTE *pbyteVal);
	
	Next, you need to add the code to the wrapper class source file. Given the
	example above, it should look like the following:
	
	  #define MY_VTS_UI1 "\x11"
	  //Do NOT use VTS_UI1. It has a value of "0x0F" which is incorrect.
	  //The correct value for VT_UI1 is 17 or 0x11
	
	  #define MY_VTS_PUI1 "\x51"
	  //Do NOT use VTS_PUI1. It has a value of "0x4F" which is incorrect.
	  //The correct value for VT_PUI1 is 81 or 0x51
	
	  void C_UserControl1::PassByte(BYTE byteVal)
	  {
	   static BYTE parms[] = MY_VTS_UI1; //please note that this is not VTS_UI1
	
	   DISPID dispid = 0x60030000;
	   InvokeHelper(dispid, DISPATCH_METHOD, VT_EMPTY, NULL, parms, byteVal);
	  }
	
	  void C_UserControl1::PassBytePointer(BYTE *pbyteVal)
	  {
	   static BYTE parms[] = MY_VTS_PUI1; //please note that this is not VTS_PUI1
	
	   DISPID dispid = 0x60030001; //notice that this is different!
	   InvokeHelper(dispid, DISPATCH_METHOD, VT_EMPTY, NULL, parms, pbyteVal);
	  }
	
	It is important to note that you need to get the DISPIDs for the omitted methods
	using a type library viewing tool. OLE/COM Object Viewer is one such tool. You
	can access this tool from the Tools menu in Visual C++. In OLE/COM Object
	Viewer, select the File menu and the View Typelib menu item. Next, find the .tlb
	or .ocx file for the COM server and click Open. This opens a new window with a
	tree control on the left side. Select the topmost item in the tree control and
	you will see all of the methods on the right with their corresponding DISPID's.
	
	A second important point is that VTS_UI1 and VTS_PUI1 are not used above. For
	additional informationon this bug, click the article number below to view the
	article in the Microsoft Knowledge Base:
	
	  Q242588 VTS_U1 and VTS_PUI1 are Defined Incorrectly in AfxDisp.h Header File
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Visual Basic ActiveX control.
	
	2. Add one method that takes a BYTE parameter. For example:
	
	  Public Sub PassByte(ByVal b as Byte)
	  End Sub
	
	3. Build the control.
	
	4. Create a new MFC Dialog based application.
	
	5. Add the Visual Basic control that was generated in step 3 using Component
	  Gallery. Do this by going to the Project menu, select Add Components and
	  Controls, and then selecting Registered ActiveX Controls.
	
	6. After you select the Visual Basic control and click OK, Component Gallery
	  presents the Confirm Classes dialog. Click OK on the Confirm Classes dialog
	  box to generate the wrapper code.
	
	To see the missing method, open up the generated wrapper class header file. You
	should see the text that states the method PassByte was not emitted because of
	invalid return type or parameter type.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q242588 VTS_U1 and VTS_PUI1 are Defined Incorrectly in AfxDisp.h Header File
	
	In MSDN documentation, refer to CWnd::InvokeHelper and
	COleDispatchDriver::InvokeHelper for more information on the parameters for
	these functions.
	
	Additional query words: automation wrapper wizard code
	
	======================================================================
	Keywords          : kbAutomation kbCOMt kbCtrl kbMFC kbVC400bug kbVC500bug kbVC600bug kbClassWizard kbCompGallery kbDSupport kbGrpDSMFCATL 
	Technology        : kbVCsearch kbAudDeveloper kbClassWizard
	Version           : winnt:4.0,4.1,4.2,5.0,6.0
	Issue type        : kbbug
	
	=============================================================================
	
