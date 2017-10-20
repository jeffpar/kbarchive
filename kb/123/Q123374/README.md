---
layout: page
title: "Q123374: Mac Form: Adding Functionality to Custom Forms"
permalink: /kb/123/Q123374/
---

## Q123374: Mac Form: Adding Functionality to Custom Forms

{% raw %}

	Article: Q123374
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Form Designer, included with versions 3.x of Microsoft Mail for AppleTalk
	Networks, allows administrators to create custom forms to install on their Mail
	servers. The Form Designer utilizes HyperCard as its design environment. While
	it is possible to add and position specific fields and buttons on a form within
	HyperCard, only limited functionality can be added using common HyperTalk
	scripting commands.
	
	MORE INFORMATION
	================
	
	When a form is compiled and installed on the Mail server using the Form Mover
	button, all the information appearing on the form is converted to Mail specific
	resources and embedded in the Microsoft Mail Server Datafile. Common HyperTalk
	scripts added to buttons or fields are ignored when the form is installed.
	
	It is possible to add functionality to a custom form using specific commands in
	the forms compile scripts or through a Form Control Procedure.
	
	The compile script is used when the form is compiled and converted to resources
	for the Mail Server's Datafile. It is possible to add a limited number of
	commands to the compile script to modify the functionality of fields on a form.
	
	For more information on using compile scripts, please see the following articles
	in the Microsoft Knowledge Base:
	
	  Q99303 Mac Forms: Adding Unavailable Choices to Custom Forms
	
	  Q102423 Mac Forms: Adding Hidden Text Feature to Fields
	
	Information on writing Form Control Procedures (FCPs) is included with the
	Microsoft Mail MPW C Software Development Kit (SDK). FCPs are application
	specific Form code that is written in C and attached to the Form. Examples of
	FCPs include the Sound form, which interfaces with sound driver software, the
	Resizable Note, and the 80-column form included with version 3.1d of Mail for
	AppleTalk Networks. It is important to note that writing FCPs for Mail for
	AppleTalk Networks is intended for advanced developers only.
	
	The Microsoft Mail MPW C SDK currently sells for $445 (US). More information on
	the Microsoft Mail MPW C SDK is available by contacting Microsoft Consumer Sales
	at (800) 426-9400.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN300 kbMailATN310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	

{% endraw %}
