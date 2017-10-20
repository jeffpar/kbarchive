---
layout: page
title: "Q99054: Mac Wkst: Message Was Sent Using a Custom Form"
permalink: /kb/099/Q99054/
---

## Q99054: Mac Wkst: Message Was Sent Using a Custom Form

{% raw %}

	Article: Q99054
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When attempting to read a message in versions 3.0 and 3.1 of Microsoft Mail for
	AppleTalk networks, the following message may be displayed:
	
	  This message was sent using a custom form that is not installed on your
	  server. Some information from the original message may not be displayed. To
	  view the complete message, ask your network manager to install the form on
	  your server.
	
	CAUSE
	=====
	
	This problem can occur if a custom form is not installed on the server, or the
	form has been installed with an incorrect two-letter ID assignment.
	
	MORE INFORMATION
	================
	
	With Microsoft Mail, custom forms can be created using the Forms Designer
	HyperCard stack that is included with the product. All custom forms for
	Microsoft Mail must be created and installed using the Forms Designer stack. If
	a form is not installed on your server, you must obtain the HyperCard stack
	containing that form, and use the Form Mover button on the Forms Designer stack
	to install it. For more information on installing forms, see the Microsoft Mail
	"Network Manager's Guide."
	
	All custom forms in Microsoft Mail are defined by a two-letter ID. Built-in Mail
	forms have lowercase ID letters; custom forms must use uppercase letters.
	
	To determine the ID values for forms on a particular server, open a form in the
	Forms Designer stack and click the Form Mover button. Forms installed on the
	currently selected server will be listed, as well as the associated two-letter
	IDs.
	
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN300 kbMailATN310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	

{% endraw %}
