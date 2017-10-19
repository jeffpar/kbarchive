---
layout: page
title: "Q215415: BUG: Access Key Works When UseMnemonic is Set to False"
permalink: /kb/215/Q215415/
---

## Q215415: BUG: Access Key Works When UseMnemonic is Set to False

	Article: Q215415
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 1.0,2.0,2.11,3.0
	Operating System(s): 
	Keyword(s): kbToolkit kbVBp600 kbOSWinCEsearch kbOSWinCE100bug kbGrpDSVB
	Last Modified: 26-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual Basic 6.0, version 1.0 
	- Microsoft eMbedded Visual Basic, version 3.0, on platform(s):
	   - Microsoft Windows CE versions 2.0, 2.11 for the Handheld PC 
	   - Microsoft Windows CE version 2.11 for the Palm-size PC 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the UseMnemonic property of a Label is set to False, the interface of the
	Label control displays any ampersand (&) appearing in the text of the
	Caption property as an ampersand. The character following the ampersand should
	not act as an access key.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Windows CE HPC Project in Visual Basic. Form1 is created by
	  default.
	
	2. In the Project Properties dialog box, select Handheld PC (Default Device) as
	  the target.
	
	3. Place two label controls and two command buttons on Form1.
	
	4. Make sure that the following properties are set at design time:
	
	+--------------------------------+
	| Control  | Property    | Value | 
	+--------------------------------+
	| Label1   | TabIndex    | 0     | 
	+--------------------------------+
	| Label1   | Caption     | "&F"  | 
	+--------------------------------+
	| Label1   | UseMnemonic | False | 
	+--------------------------------+
	| Command1 | TabIndex    | 1     | 
	+--------------------------------+
	| Label2   | TabIndex    | 2     | 
	+--------------------------------+
	| Label2   | Caption     | "&T"  | 
	+--------------------------------+
	| Command2 | TabIndex    | 3     | 
	+--------------------------------+
	
	5. Run the project.
	
	6. Press the ALT+T key combination and note that Command2 gets the focus. Click
	  the ALT+F keys and note that Command1 gets the focus. Because Label1 has its
	  UseMnemonic property set to False, you do not expect that clicking the ALT+F
	  keys would have an affect on the application.
	
	REFERENCES
	==========
	
	Windows CE Toolkit Help
	
	Additional query words: vbce vbce6 wce wince
	
	======================================================================
	Keywords          : kbToolkit kbVBp600 kbOSWinCEsearch kbOSWinCE100bug kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword2 kbVBeMbSearch kbWinCETKVBSearch kbWinCESearch
	Version           : :1.0,2.0,2.11,3.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
