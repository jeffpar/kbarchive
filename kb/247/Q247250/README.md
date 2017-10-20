---
layout: page
title: "Q247250: XCLN: Cannot Remove Signature from Custom Form w/AutoSignature"
permalink: /kb/247/Q247250/
---

## Q247250: XCLN: Cannot Remove Signature from Custom Form w/AutoSignature

{% raw %}

	Article: Q247250
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:2000,97,98
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 2000 
	- Microsoft Outlook 97 
	- Microsoft Outlook 98 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You cannot remove the AutoSignature from the MESSAGE control of a custom form
	that was created from the default New Message form (Ipm.note) and that has an
	AutoSignature applied to it. Deleting and re-inserting the MESSAGE control puts
	the AutoSignature back in the MESSAGE control. Even when you are using the .oft
	file associated with the form, the same behavior occurs.
	
	CAUSE
	=====
	
	The MESSAGE control is a special control/field combination that cannot be
	modified.
	
	WORKAROUND
	==========
	
	There are two possible workarounds:
	
	- Recreate the form using a new Ipm.note form with AutoSignature disabled.
	
	-or-
	
	- Open the form, delete the AutoSignature text from the message body, and then
	  republish the form with the same name.
	
	MORE INFORMATION
	================
	
	Outlook forms contain both fields and controls. Examples of controls are the
	MESSAGE control, the SUBJECT control, and so on. Controls do not store any data.
	The data is stored in Outlook fields. Consequently, deleting controls (TEXT BOX,
	BUTTON, MESSAGE controls, and so on) doesn't change anything except the visual
	part of the form. If there is a field bound to the control that is deleted, the
	field still exists in the form and still contains its data. You can see this
	data on the All Fields page of the form. With normal TEXT BOX controls, you can
	choose which Outlook field stores the data that is entered into the control. The
	control is just used for entering data into or displaying data from the field.
	If you right-click a control (for example, the SUBJECT control) and click
	Properties, the Value tab shows you which field is currently bound to the
	control.
	
	The MESSAGE control, however, is a special control/field combination and doesn't
	have a Value tab. Most of the controls/fields on a mail item are special MESSAGE
	or RECIPIENT controls that can't really be modified.
	
	
	Additional query words: autosignature, auto-signature
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOutlook2000Search kbOutlook97Search kbOutlook98Search kbZNotKeyword3
	Version           : WINDOWS:2000,97,98
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
