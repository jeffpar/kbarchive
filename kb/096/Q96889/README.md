---
layout: page
title: "Q96889: Mac Form: Replying with a Custom Form"
permalink: /kb/096/Q96889/
---

## Q96889: Mac Form: Replying with a Custom Form

{% raw %}

	Article: Q96889
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When reading a message in version 3.0 or 3.1 of Microsoft Mail for AppleTalk
	Networks, choosing the Reply button generates a reply using the standard Note
	form. Using the custom forms feature of Mail, it is possible to configure a form
	to reply using the same custom form or a different form. This can produce a
	linking effect between forms.
	
	MORE INFORMATION
	================
	
	To chain forms, it is possible to modify the "replyID" field on the title card
	of the Forms Designer by doing the following:
	
	1. Open the desired form stack in HyperCard.
	
	2. Press COMMAND+M to display the Message window.
	
	3. Type "SET THE USERLEVEL TO 5" (without the quotation marks) and press the
	  ENTER key.
	
	4. Type "SHOW CARD FIELD "REPLYID"" (without the quotation marks) and press the
	  ENTER key.
	
	5. Select the Field tool. To the right of the ID field, an empty field will
	  appear.
	
	6. Double-click this field. Cancel the Lock Text option. Choose the OK button.
	
	7. Use the Browse tool to enter the two character IDs of the form you want to
	  use as the reply form.
	
	8. Select the Field tool again, double-click the replyID field and then select
	  the Lock Text check box again. Choose the OK button.
	
	9. In the Message window, enter "HIDE CARD FIELD "REPLYID"" (without the
	  quotation marks) and press ENTER.
	
	10. Click the Form Mover button to install the form.
	
	
	Additional query words: 3.00 3.10 Chaining
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN300 kbMailATN310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	

{% endraw %}
