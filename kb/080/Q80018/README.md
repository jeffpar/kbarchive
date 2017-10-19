---
layout: page
title: "Q80018: Mac Form: Body Field of Message Must Be Set to Print"
permalink: /kb/080/Q80018/
---

## Q80018: Mac Form: Body Field of Message Must Be Set to Print

	Article: Q80018
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the Form Designer for Microsoft Mail, each field on the Read Screen can be
	set to print or not print by toggling the choice on the Printed Form. If the
	Body field is not set to print, the body of the message will appear empty in the
	Mail message when it is read. This behavior occurs only with the Body field and
	there is no loss of data.
	
	MORE INFORMATION
	================
	
	The Form Designer looks at the name of each field when it compiles a screen. If
	the name of the Body field is changed to any other name, Body2 for example, then
	the field can be set to not print, but still be readable when the message is
	read. This change must be made for the Body field on both the Send and the Read
	Screen. The Send and Read Screens and the Printed Form must then be recompiled,
	and the form reinstalled.
	
	If a form with the Body field set not to print has been installed and used on a
	Mail server, the data in messages sent with this form can be recovered. On the
	Printed Form, turn printing of the Body to Yes, recompile the Printed Form and
	reinstall the form on the server. The data will then be visible.
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
