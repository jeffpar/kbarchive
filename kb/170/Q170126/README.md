---
layout: page
title: "Q170126: FIX: Using the SelPrint Method of the Rich Text Control"
permalink: /kb/170/Q170126/
---

## Q170126: FIX: Using the SelPrint Method of the Rich Text Control

	Article: Q170126
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,95
	Operating System(s): 
	Keyword(s): kbvfp500aBUG kbvfp500bug kbvfp600fix
	Last Modified: 14-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, used with:
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows NT 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The example code from Help for the SelPrint method of the Microsoft Rich Text
	Control causes syntax errors when saving after it is pasted into the Click
	method of a command button as directed by Help. Additionally, once the syntax
	errors are fixed, the contents of the Rich Text control do not print on the
	Windows 95 platform but no error messages are received.
	
	CAUSE
	=====
	
	The example code in Help for the SelPrint method of the Microsoft Rich Text
	control is Visual Basic code.
	
	Even after converting this code to Visual FoxPro code, the contents of the Rich
	Text Control cannot be printed on the Windows 95 platform. The specific cause of
	this behavior is under investigation.
	
	RESOLUTION
	==========
	
	The example code for the SelPrint method can be changed into the following
	Visual FoxPro code to eliminate the syntax errors and get the contents of the
	Rich Text control to print when Visual FoxPro is running on the Windows NT 4.0
	platform.
	
	As stated in Help, place the following code in the Click method of a command
	button. A CommonDialog control should also be placed on the form with a command
	button and a Rich Text control:
	
	  cdlPDReturnDC=256
	  cdlPDNoPageNums=8
	  cdlPDSelection=1
	  cdlPDAllPages=0
	
	  Thisform.CommDlg1.Flags = cdlPDReturnDC + cdlPDNoPageNums
	  If Thisform.RTF1.SelLength = 0
	  Thisform.CommDlg1.Flags = Thisform.CommDlg1.Flags ;
	  + cdlPDAllPages
	  Else
	  Thisform.CommDlg1.Flags = Thisform.CommDlg1.Flags ;
	  + cdlPDSelection
	  EndIf
	  Thisform.CommDlg1.ShowPrinter
	  Thisform.RTF1.SelPrint(Thisform.CommDlg1.hDC)
	
	Note that the above code refers to CommDlg1 and RTF1 as the names of the ActiveX
	controls. When these controls are placed on a form, the names default to
	"OLEControl1" and "OLEControl2." Therefore, the name property for these two
	controls needs to be changed to "CommDlg1" and "RTF1," respectively, for the
	above code to work properly in Visual FoxPro.
	
	The code in this article might cause the following error if you click Cancel
	instead of OK in the printer dialog box:
	
	  OLE Idispatch Exception code 0 from richttextctrl: Invalid HDC...
	
	NOTE: Thisform.OleControl2.hDC returns a -1 when Cancel is chosen; therefore, the
	error occurs. To prevent this error, place an IF...ENDIF statement around the
	last line of the Click event code as follows:
	
	  IF Thisform.OleControl2.hDC>0
	     Thisform.OleControl1.SelPrint(Thisform.OleControl2.hDC)
	  ENDIF
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual FoxPro 6.0.
	
	MORE INFORMATION
	================
	
	The name and version of the Rich Text control varies depending on which version
	of Visual FoxPro or Visual Basic has been installed on the computer.
	
	Look in the Tools, Options dialog box, Controls tab in Visual FoxPro to check
	which version of a control is installed. Unfortunately the dialog box displaying
	the controls is not wide enough to show the version number of the Rich Text
	control. The actual file version can be obtained by viewing the properties of
	the .ocx file in Windows Explorer.
	
	The Microsoft Rich Textbox Control, version 1.0.2922, is installed by Visual
	FoxPro 5.0. The file name is Richtx32.ocx and is found in either the
	Win95\System or the WinNT\System32 folder depending on the operating system.
	
	The Microsoft RichText Control, version 5, version 5.00.3714, is installed by
	Visual FoxPro 5.0a. It is also named Richtx32.ocx and is found in the same
	locations as the version installed by Visual FoxPro 5.0.
	
	After you click OK to print in the Print dialog box, it places that value in the
	Thisform.OleControl2.hDC. This value is not reset until you close the form.
	Therefore, you might see the behavior when someone clicks OK to print and then
	(without closing the form) clicks Cancel. The job prints anyway because the
	value has not been reset.
	
	REFERENCES
	==========
	
	Help for the Microsoft Rich Text Control: Access this by right-clicking on the
	control on the form and selecting Help from the shortcut menu. Click the Methods
	jump at the top of the page and select the SelPrint Method to Display from the
	Topics Found dialog box. The sample code is in the Example jump at the top of
	the page.
	
	ActiveX Controls Overview Help topic. Type "HELP ActiveX Controls Overview" in
	the Visual FoxPro Command window to go directly to this topic.
	
	For additional information about adding ActiveX controls to your applications,
	see Chapter 16, "Adding OLE," in the Developer's Guide.
	
	The values for the constants, cdlPDReturnDC, cdlPDNoPageNums, cdlPDSelection, and
	cdlPDAllPages, used in the Resolution section above are from the Help file for
	the Common Dialog control, Flags Property(Print Dialog) topic. Right-click the
	Common Dialog control and select Help from the shortcut menu.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp500aBUG kbvfp500bug kbvfp600fix 
	Technology        : kbVFPsearch kbAudDeveloper
	Version           : WINDOWS:5.0,5.0a,95
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
