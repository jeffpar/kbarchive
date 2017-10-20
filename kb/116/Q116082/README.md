---
layout: page
title: "Q116082: SAMPLE: Using MCI Commands in Visual Basic"
permalink: /kb/116/Q116082/
---

## Q116082: SAMPLE: Using MCI Commands in Visual Basic

{% raw %}

	Article: Q116082
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1; :1.1
	Operating System(s): 
	Keyword(s): kbfile kbmm kbsample kb16bitonly kbOSWin310
	Last Modified: 04-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	- Microsoft Video for Windows Development Kit, version 1.1 
	- Microsoft Visual Basic Standard Edition for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The VBMCI sample shows how to use the function "mciSendString()" in Microsoft
	Visual Basic to play multimedia files. This sample also uses the custom control
	"MMControl" from the MCI.VBX custom-control file to play multimedia files. You
	may find it easier to use MMControl to manipulate multimedia files than to use
	mciSendString() commands.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  Vbmci.exe
	  (http://download.microsoft.com/download/platformsdk/sample85/3.1/W31/EN-US/VBMCI.EXE)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	This sample demonstrates only a few of the features of MMControl and a few of the
	commands strings that mciSendString() can use. The "Microsoft Visual Basic
	Professional Features," Book 1, contains a complete description of all of the
	features of MMControl.
	
	The following files are included in the file VBMCI.EXE:
	
	  FORM1.FRM
	  FRMABOUT.FRM
	  GLOBAL.BAS
	  MCIVBX.FRM
	  OPENDLG.FRM
	  README.TXT
	  VBMCISTR.MAK
	
	REFERENCES
	==========
	
	You can find more information on command strings that you can send by using
	mciSendString() in the following resources:
	
	- "Multimedia Programmer's Reference," included with the Windows 3.1 Software
	  Development Kit (SDK).
	
	- "Multimedia Programmer's Guide," included with the Windows 3.1 SDK.
	
	- MCISTRWH.HLP, a Windows Help file included with Microsoft Visual C++,
	  Professional Edition, version 1.X.
	
	- DK_DOC.MVB or DK_DOC.HLP, Windows Help files included with the Video for
	  Windows Development Kit, version 1.1. (NOTE: These Help files also contain
	  information on the controls in the MCI.VBX and MCIWNDX.VBX custom-control
	  files.)
	
	The "Microsoft Video for Windows Development Kit," version 1.1, comes with a
	robust sample of how to use the features of the custom-control file MCIWNDX.VBX.
	This sample is called "VBMCITst".
	
	In addition, there is a helpful topic in both the DK_DOC.HLP and DK_DOC.MVB files
	titled "Comparing MCIWNDX.VBX to MCI.VBX".
	
	Additional query words: softlib VBMCI.EXE
	
	======================================================================
	Keywords          : kbfile kbmm kbsample kb16bitonly kbOSWin310 
	Technology        : kbVBSearch kbAudDeveloper kbWin3xSearch kbVideoSearch kbSDKSearch kbVB300Search kbVB300 kbWinSDKSearch kbWinSDK310 kbVideoDK110
	Version           : WINDOWS:3.0,3.1; :1.1
	
	=============================================================================
	

{% endraw %}
