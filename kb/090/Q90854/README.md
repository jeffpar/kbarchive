---
layout: page
title: "Q90854: PRB: Accented Characters in Filename Controls Lose Accents"
permalink: /kb/090/Q90854/
---

## Q90854: PRB: Accented Characters in Filename Controls Lose Accents

{% raw %}

	Article: Q90854
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbComboBox kbCtrl kbEditCtrl kbSDKPlatform kbGrpDSUser
	Last Modified: 12-JUN-1999
	
	3.00 3.10
	WINDOWS
	kbprg kbprb
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In an application for the Microsoft Windows graphical environment that uses a
	combo box with the CBS_OEMCONVERT style or an edit control with the
	ES_OEMCONVERT style, the user enters a character with an accent mark, and the
	accent is lost.
	
	CAUSE
	=====
	
	The OEMCONVERT control styles convert all input as follows:
	
	- Convert lowercase letters to uppercase letters with the AnsiUpper function.
	
	- Convert all characters from the ANSI character set to the installed OEM
	  character set with the AnsiToOem function.
	
	- Convert the appropriate characters back to lowercase letters with the
	  AnsiLower function.
	
	Because the OEM character set installed in most computers (code page 437) does
	not include representation for the capital letters with accent marks, the accent
	marks are lost in this conversion process. This occurs in all versions of
	Windows, including those designed for use outside the United States.
	
	RESOLUTION
	==========
	
	Unicode specifies a unified character set that can represent every active
	language and many dead languages. Windows NT incorporates support for Unicode.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	For further details on the cause of this problem, see the article by Dr. William
	S. Hall "Adapt Your Program for Worldwide Use with Windows Internationalization
	Support," starting on page 29 of the Nov-Dec 1991 Microsoft Systems Journal.
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          : kb16bitonly kbComboBox kbCtrl kbEditCtrl kbSDKPlatform kbGrpDSUser 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
