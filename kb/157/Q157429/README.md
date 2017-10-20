---
layout: page
title: "Q157429: INFO: More About the Automation and Connection Managers"
permalink: /kb/157/Q157429/
---

## Q157429: INFO: More About the Automation and Connection Managers

{% raw %}

	Article: Q157429
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbinterop kbAutomation kbvfp500 kbvfp600
	Last Modified: 31-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains information about the Automation Manager and the
	Connection Manager, such as the purpose of the Automation Manager, how to
	properly register it, and how the Connection Manager handles client access
	privileges.
	
	MORE INFORMATION
	================
	
	The Automation Manager runs in the background and basically does nothing more
	than act as the process for handling remote automation. Specifically, the
	Automation Manager serves as both an OLE Proxy and OLE Stub to process and
	marshal remote procedural calls (RPCs). You are not able to create a remote
	server object without having it running.
	
	If you plan on making OLE Callbacks, then you need to have it running on the
	client as well. If the Automation Manager is properly registered, then it is
	automatically started when an OLE Callback is invoked (that is, an object
	reference from the client is passed to the remote server).
	
	If the Automation Manager does not automatically launch with an OLE Callback,
	then it may not be registered properly. The Visual FoxPro installation process
	does this automatically, but if the registry somehow becomes corrupt, you can do
	this yourself from Visual FoxPro as follows:
	
	  
	
	     RUN /n c:\vfp\autmgr32.exe /regserver
	
	Automation Manager registry settings are stored in the following location:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Automation Manager
	
	The Remote Automation Connection Manager (RacMan) is a component that ships with
	Visual FoxPro and handles the following:
	
	- Remote connectivity on the client side--the client can change a server that
	  is already registered locally to being registered remotely.
	- Client access on the server side--the server can determine access for clients
	  either at machine level or at automation server level. With NT, Access
	  Control List (ACL) security policies can be enforced.
	
	Registry settings for remote servers are stored with the specific server itself
	in the CLSID key in HKEY_CLASSES_ROOT.
	
	REFERENCES
	==========
	
	For more information about OLE Automation in Visual FoxPro, please see the
	following articles in the Microsoft Knowledge Base:
	
	  Q157049 HOWTO: Debug Remote Automation Servers
	
	  Q156014 HOWTO: Set Up OLE Automation in Visual FoxPro
	
	  Q155939 HOWTO: Use Clireg32.exe for Remote Automation
	
	  Q155934 INFO: General Information About the OLE Automation Manager &
	  Racman
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbAutomation kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
