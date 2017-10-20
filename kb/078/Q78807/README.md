---
layout: page
title: "Q78807: DDEMeta.exe - DDEML with Metafiles"
permalink: /kb/078/Q78807/
---

## Q78807: DDEMeta.exe - DDEML with Metafiles

{% raw %}

	Article: Q78807
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbfile kbsample kb16bitonly kbDDE kbGrpDSUser
	Last Modified: 04-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	DDEMeta.exe is a sample file that contains the source code to an application
	that demonstrates how to read a Windows metafile and pass the information using
	dynamic data exchange (DDE).
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	DDEMeta.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	DDEMETA is a server application that uses the Dynamic Data Exchange Management
	Library (DDEML).
	
	To use DDEMETA, perform the following five steps:
	
	1. Start DDEMETA.
	
	2. Choose DDE Init from the Sample menu to register DDEMETA with the DDEML.
	
	3. Start a DDE client application to initiate a conversation with DDEMETA. In
	  the client, use the application name "DDEMETA" and the topic "Test".
	
	4. After the conversation is established, the client application can request any
	  "item" of type CF_METAFILEPICT from the server.
	
	5. When DDEMETA receives the request, it will read the TEST.WMF file from the
	  disk and pass it to the client application.
	
	To test DDEMETA, request a CF_TEXT item. Note that the "item" reference is never
	checked; therefore, any item name works.
	
	Note: This program will not read "placeable" metafiles. For more information on
	"placeable" metafiles, query on the following words in the Microsoft Knowledge
	Base:
	
	  placeable
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbsample kb16bitonly kbDDE kbGrpDSUser 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
