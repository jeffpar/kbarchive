---
layout: page
title: "Q66246: SAMPLE: Twins.exe Uses RegisterWindowMessage for Interapp Comm."
permalink: /kb/066/Q66246/
---

## Q66246: SAMPLE: Twins.exe Uses RegisterWindowMessage for Interapp Comm.

{% raw %}

	Article: Q66246
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kbfile kbsample kb16bitonly kbGrpDSUser kbOSWin310 kbWndw kbWndwMsg
	Last Modified: 04-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The RegisterWindowMessage() function associates a unique message number with a
	given message name. This message number is guaranteed to be unique throughout
	the system but may change between Windows sessions. The new message is typically
	used for communication between two cooperating applications.
	
	Using RegisterWindowMessage() is an alternative to using DDE to communicate
	between two or more applications. This technique is most useful if the
	information to be passed between applications can be contained in the wParam
	and/or lParam parameter of the message.
	
	A sample application is available that demonstrates how to implement
	communication between two cooperating applications, using
	RegisterWindowMessage().
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  Twins.exe
	  (http://download.microsoft.com/download/platformsdk/sample79/3.1/W31/EN-US/Twins.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbsample kb16bitonly kbGrpDSUser kbOSWin310 kbWndw kbWndwMsg 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	

{% endraw %}
