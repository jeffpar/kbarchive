---
layout: page
title: "Q97409: DDESERV Demonstrates a Basic DDE Server"
permalink: /kb/097/Q97409/
---

## Q97409: DDESERV Demonstrates a Basic DDE Server

{% raw %}

	Article: Q97409
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbfile kbDDE
	Last Modified: 09-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Adding dynamic data exchange (DDE) server support to an application has never
	been easier. This article describes a code module you can include in your own
	application that makes adding DDE server support trivial. The code module makes
	use of the dynamic data exchange management library (DDEML) to implement the DDE
	protocol and provides the following features:
	
	- Full System topic support
	
	- An application programming interface (API) to dynamically add and remove
	  topics and topic/item pairs
	
	- An API to dynamically add and remove DDE execute commands to a topic
	
	- Automatic tracking of conversations
	
	- Built-in execute command parser
	
	- Partial support for the Execute Control 1 protocol, which allows a result
	  string to be returned in response to a DDE execute command request
	
	This article requires considerable familiarity with DDE concepts---it's not a
	good place to start learning about DDE. Please refer to the Microsoft Windows
	version 3.1 Software Development Kit (SDK) Programmer's Reference, Volume 1:
	Overview, Part 2: Extension Libraries for a general introduction to DDE and
	DDEML. The following articles on the Microsoft Developer Network CD (Technical
	Articles, Windows Articles, OLE and DDE Articles) provide more detail on various
	DDE topics:
	
	- "DDE Execute Strings"
	
	- "DDE Hot Links"
	
	- "Performing DDE from a Dynamic-Link Library"
	
	- "Raw DDE"
	
	- "Supporting the Clipboard, DDE, and OLE in Applications"
	
	- "Supporting the DDE System Topic"
	
	DDESERV shows how you can easily create a dynamic data exchange (DDE) server that
	supports the System topic and an Execute command set. You can build the server
	by using the STDDDE.C module included in the sample.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	Ddeserv.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	Additional query words: softlib DDESERV.EXE
	
	======================================================================
	Keywords          : kbfile kbDDE 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
