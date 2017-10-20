---
layout: page
title: "Q166259: INFO: Visual Interdev/Visual SourceSafe Integration Discussion"
permalink: /kb/166/Q166259/
---

## Q166259: INFO: Visual Interdev/Visual SourceSafe Integration Discussion

{% raw %}

	Article: Q166259
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:1.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbinterop kbSSafe500 kbSSafe600 kbVisID100 kbFAQ kbDSupport kbSsafe600FAQ
	Last Modified: 18-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	- Microsoft Visual InterDev, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Visual Studio contains a number of source code control operations on
	the Project/Source Control menu. These operations do not have any effect on a
	Visual InterDev project.
	
	In Visual C++, Visual J++, and other Visual Studio projects, source code control
	is a client-side issue. Any source control operations are performed on a source
	code database stored either on the client computer or on a computer with a LAN
	connection to the client. To support projects that use this type of connection,
	the Project\Source Control menu is used, and the source code client lives on the
	client computer.
	
	Unlike the cases above, however, it is possible that the Visual InterDev project
	can be stored on the other side of a firewall, on some location where a LAN
	connection cannot be made. This requires the source code control database to
	likewise be behind the firewall, to ensure the security of the project database.
	Visual InterDev uses FrontPage Server Extensions to access the Web Server for
	this robustness, therefore Visual SourceSafe and Visual InterDev integration is
	done via the FrontPage Server Extensions.
	
	This requires Visual InterDev to use a different model for source code control
	than the other Visual Studio projects. As a result, the options on the
	Project\Source control menu do not work against a Visual InterDev project. To
	differentiate the client-side source control model of other Visual Studio
	projects from the server-side source control of Visual InterDev projects,
	different terminology is used for these operations. These options are available
	by right-clicking any file in the Visual InterDev project window.
	
	In Visual InterDev, a "Get Working Copy" operation on a file retrieves the file,
	and performs the server-side "check-out" action if the project is under source
	control. "Release Working Copy" removes the file from the local drive and checks
	in the file to the server. And "Discard Changes" performs the equivalent of an
	undo checkout.
	
	To use source code control in Visual InterDev, always use the Visual InterDev
	server-side commands (accessed by right-clicking the files in the project pane).
	The client-side commands available on the Project\Source Control menu do not
	work with the server-side source control databases required by Visual InterDev.
	
	MORE INFORMATION
	================
	
	If you need to access any of the higher-level source control functionality on
	the web server, then you need to access the source control server directly,
	either on the server or on a computer connected to the server through a LAN
	connection. When you are using Microsoft Visual SourceSafe, for example, you can
	view the history information by running the Visual SourceSafe client on the
	server computer. Likewise, the rolling back of changes, Visual SourceSafe
	administration, and other source control tasks can be performed in this way.
	However, note that if you use this approach, you have to ensure that you move
	the changes you make directly to the Visual SourceSafe database to the server
	directory that stores your web in order to keep the Visual SourceSafe database
	and your web site in sync.
	
	REFERENCES
	==========
	
	To setup up Visual SourceSafe on your web server, consult the Visual InterDev
	user's guide for the chapter "Using Visual SourceSafe with your web."
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q128723 HOWTO: Reference a Time on the Command Line
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbSSafe500 kbSSafe600 kbVisID100 kbFAQ kbDSupport kbSsafe600FAQ 
	Technology        : kbVisIDsearch kbSSafeSearch kbAudDeveloper kbVisID100 kbSSafe600 kbSSafe500
	Version           : WINDOWS:1.0,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
