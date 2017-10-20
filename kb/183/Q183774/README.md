---
layout: page
title: "Q183774: XCLN: How to Allow File Attachments in EFD Forms"
permalink: /kb/183/Q183774/
---

## Q183774: XCLN: How to Allow File Attachments in EFD Forms

{% raw %}

	Article: Q183774
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You cannot insert an attachment in an e-form that was created via Microsoft
	Exchange Forms Designer (EFD). When you compose a message using the form, the
	File option under the Insert menu is unavailable (grayed out) and nothing
	happens when you click on the Insert File icon on the toolbar.
	
	WORKAROUND
	==========
	
	To allow file attachments in Microsoft EFD, you need to create a RichEntry field
	and give the field the Reference Name of MAPI_Body_Custom. To do this, perform
	the following steps (Note, these steps are also described in online Help and in
	the "Application Designer's Guide"):
	
	1. Open a project or create a new form in EFD.
	
	2. Click the RichEntry field in the Toolbox, and then click the location on the
	  Form window where you want to place the field.
	
	3. Double-click the RichEntry field to open the properties.
	
	4. In the Reference Name list box, click the General tab and select
	  MAPI_Body_Custom. Only a RichEntry field named MAPI_Body_Custom will allow
	  file attachments. When you give the MAPI_Body_Custom name to a RichEntry
	  field, the "Allow Multiple Lines" and "Allow File Attachments" properties are
	  automatically checked in the Format tab.
	
	5. Save and Install the e-form to the desired location. The choices to insert a
	  file will now be available.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
