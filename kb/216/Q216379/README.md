---
layout: page
title: "Q216379: FIX: Visual Basic 6.0 Booleans are Coerced to Localized Strings"
permalink: kb/216/Q216379/
---

## Q216379: FIX: Visual Basic 6.0 Booleans are Coerced to Localized Strings

	Article: Q216379
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbIntl kbVBp600bug kbGrpDSVB kbVS600sp2 kbVS600SP1 kbVS600sp3fix kbIntlDe
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When Boolean constants or variables are concatenated into a string and the
	Regional Setting is not English, Visual Basic 6.0 coerces the Boolean value to a
	string containing the text of the value. For example, when the Regional Settings
	are set to French, you would see the string "Vrai" for True. Unfortunately,
	"Vrai" will not be converted back to the Boolean True even when CBool is
	applied. If CBool is applied to the string containing the localized word, a Type
	Mismatch error occurs.
	
	RESOLUTION
	==========
	
	The simplest work around is to apply CStr or Str$ to the Boolean constant or
	variable before it is coerced into the localized word. For example, in the
	following sample, the Boolean value True is explicitly converted to a string to
	retain the English value. The string can then be successfully parsed and
	converted back to a Boolean value.
	
	       sTemp = "-" & CStr(True) ' CStr keeps the English word True.
	       Debug.Print sTemp
	       sTemp = Right(sTemp, 4)
	       Debug.Print sTemp
	       bTemp = CBool(sTemp)     ' No Type Mismatch error.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3. For more information
	about Visual Studio service packs, please see the following articles in the
	Microsoft Knowledge Base:
	
	Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Visual Basic 6.0 coerces Boolean constants and variables to strings containing
	localized words when Regional Settings are set to a language other than English.
	Visual Basic 6.0 is unable to convert these localized strings back to their
	Boolean values.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Click the Start button, point to Settings and then select Control Panel.
	
	2. In the Control Panel dialog box, double-click Regional Settings.
	
	3. In the Regional Settings dialog box, click the Regional Settings tab (General
	  tab on Windows 2000), set the language to French, then click OK. You need to
	  reboot your computer if you are using the Windows 95 or Windows 98 operating
	  system.
	
	4. Create a Visual Basic 6.0 Standard EXE project. Form1 is created by default.
	
	5. Paste the following code in the General Declarations section of Form1:
	
	     Private Sub Form_Load()
	     sTemp = "-" & True   ' Visual Basic 6.0 coerces True to localized string
	     Debug.Print sTemp
	     sTemp = Right(sTemp, 4)
	     Debug.Print sTemp
	     bTemp = CBool(sTemp) ' Visual Basic 6.0 Type Mismatch error occurs here.
	     End Sub
	
	6. Step through the code and monitor the value of sTemp. You can do this by
	  pressing F8 repeatedly and watch the values displayed for sTemp in the
	  Immediate Window or you can place the mouse pointer over the variable in the
	  integrated development environment (IDE). After the first line is executed,
	  sTemp is coerced or translated into -Vrai. Next, the hyphen is parsed out.
	  When the conversion to Boolean is attempted, a Type Mismatch error occurs.
	
	Additional query words: False
	
	======================================================================
	Keywords          : kbservicepack kbIntl kbVBp600bug kbGrpDSVB kbVS600sp2 kbVS600SP1 kbVS600sp3fix kbIntlDev 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
