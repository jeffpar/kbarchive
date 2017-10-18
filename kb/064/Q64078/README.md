---
layout: page
title: "Q64078: RightJus.exe Right Justifies Numbers in List Box"
permalink: kb/064/Q64078/
---

## Q64078: RightJus.exe Right Justifies Numbers in List Box

	Article: Q64078
	Product(s): Microsoft Windows Software Development Kit
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbfile kbsample kbCtrl kbListBox kbSDKPlatform kbGrpDSUser kbUser kb16bitonly
	Last Modified: 23-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In versions of Windows earlier than 3.0, it is possible to align columns of
	information in a list box with spaces, because all characters in the system font
	are the same width. In Windows 3.0, the system font is proportionally spaced
	with letters of differing widths, which prevents this technique from being
	usable.
	
	Tabs can be used to align columns in a list box. The LBS_USETABSTOPS style must
	be specified when the list box is created. Then, set a tab to correspond with
	the position of each character of each numeric column. The tabs are specified in
	dialog units, which are one-fourth of a character width. For example, a
	three-digit field that should align 12 characters from the left edge of the
	dialog box can be implemented by setting tabs at positions 40, 44, and 48. This
	is illustrated below:
	
	   +------------+
	   |text     xxx|
	   |longer    xx|
	             ^^^
	             ||+- position 48
	             |+-- position 44
	             +--- position 40
	
	After determining the text to insert in the list box, convert the spaces to the
	appropriate number of tabs as the following code fragment demonstrates:
	
	     sprintf(szNumBuffer, "%3d", Number);
	     for (i = 0; i < 3; i++)
	
	       if (szNumBuffer[i] == ' ')
	          szNumBuffer[i] = '\t';
	
	This code uses the three tabs set above.
	
	There is a file in the Microsoft Download Center named RIGHTJUS that illustrates
	this convention.
	
	NOTE: This sample is applicable only to Windows 3.1, NOT to Win32.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  RightJus.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbsample kbCtrl kbListBox kbSDKPlatform kbGrpDSUser kbUser kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : :3.1
	Issue type        : kbinfo
	
	=============================================================================
	
