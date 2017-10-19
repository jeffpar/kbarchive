---
layout: page
title: "Q48713: DefBtn.exe Creates Default Border Around a Push Button"
permalink: /kb/048/Q48713/
---

## Q48713: DefBtn.exe Creates Default Border Around a Push Button

	Article: Q48713
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kbfile kbsample kb16bitonly kbButton kbCtrl kbSDKPlatform kbGrpDSUser
	Last Modified: 05-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	DefBtn.exe is a sample that demonstrates the correct message sequence to change
	the status of a push button from the "normal" state to the "default" state. The
	default push button receives a message when the ENTER key is choosen in a dialog
	box, no matter which control currently has the focus.
	
	In the DefBtn.exe sample, when a numeral button is pressed ("1", "2", or "3") the
	corresponding number button ("one", "two", or "three") becomes the default
	button.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	DefBtn.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	For a button to be correctly activated by using an accelerator, it is necessary
	to subclass the button to process the focus messages. This is caused by the fact
	that accelerators bypass some steps in the message flow.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbsample kb16bitonly kbButton kbCtrl kbSDKPlatform kbGrpDSUser 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
