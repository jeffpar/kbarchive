---
layout: page
title: "Q92829: DDEML Samples Using Microsoft Foundation Classes"
permalink: /kb/092/Q92829/
---

## Q92829: DDEML Samples Using Microsoft Foundation Classes

{% raw %}

	Article: Q92829
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kbfile kbprogramming kbsample kbDDE
	Last Modified: 09-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	CDDEML is a set of two sample applications that demonstrate a DDEML client and a
	DDEML server. They are written using the Microsoft Foundation Class Libraries
	(MFC) and define new classes for handling DDEML.
	
	The following files are available for download from the Microsoft Download
	Center:
	
	Cddeml.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	MORE INFORMATION
	================
	
	This sample contains two applications that demonstrate a DDEML server and DDEML
	client in MFC applications. This sample defines four new classes to help
	implement the DDEML support. These classes are:
	
	  CDDEClient
	  CDDEClientConv
	  CDDEServer
	  CDDEServerConv
	
	The CDDEClient and CDDEServer classes encapsulate the functionality of a DDEML
	client or server. CDDEClientConv and CDDEServerConv encapsulate individual
	conversations that are managed by the CDDEClient or CDDEServer class. The
	CDDEClient and CDDEServer classes maintain a map of the current conversations
	according to the conversations handle. Using this map, the server or client can
	look up any ongoing conversation based on its handle.
	
	These classes were designed to implement DDEML in a very general way. As a
	result, these classes don't do much by themselves; they are designed to be
	reused in an application by deriving from each of these classes. Typically, an
	application derives one class from CDDEClient or CDDEServer. This derived class
	contains details such as what conversations are supported and how to handle
	callbacks that do not relate to a specific conversation. Usually there is only
	one instance of this class in an application. An application may derive many
	classes from CDDEClientConv or the application supports. These derived classes
	implement how each conversion handles callbacks. They also may contain buffers
	to store data from the conversation, or pointers to other objects that they need
	to communicate with. This sample contains a client and server application built
	using the classes mentioned above.
	
	One difficulty in writing DDEML classes is how to handle the DDEML callback
	function. In this sample, the DDEML callback function is contained in the
	CDDEClient or CDDEServer class. The callback function first checks to see
	whether the transaction is for the client or server, or for one of the
	conversations. If it is for the client or server, then the callback function
	calls the member function that handles that transaction. If the transaction is
	for a conversation, then the callback function looks up the pointer to the
	conversation object using the handle of the conversation in the conversation
	map. Then it calls the member function of the conversation that handles that
	transaction. Therefore, by using these classes, an application developer does
	not need to write a DDEML callback function.
	
	Additional query words: 3.00 3.10 softlib CDDEML.EXE
	
	======================================================================
	Keywords          : kbfile kbprogramming kbsample kbDDE 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	

{% endraw %}
