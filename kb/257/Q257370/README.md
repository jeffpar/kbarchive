---
layout: page
title: "Q257370: XCLN: Using Hypertext Markup Language Forms and Public Folders"
permalink: /kb/257/Q257370/
---

## Q257370: XCLN: Using Hypertext Markup Language Forms and Public Folders

{% raw %}

	Article: Q257370
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5,97; :
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook HTML Form Converter 
	- Microsoft Outlook Web Access, version 5.5 
	- Microsoft Outlook 97 
	- Microsoft Outlook 98 
	- Microsoft Outlook 2000 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use Outlook Web Access (OWA) to gain access to a public folder that is
	configured as an Outlook contacts folder, you may receive the following error
	message:
	
	  This Version of Outlook only supports your primary contact folder.
	
	If you click OK, you are returned you to your primary Contacts folder in your
	mailbox.
	
	CAUSE
	=====
	
	This issue can occur because although you can create Outlook modules as folders
	in Exchange Server public folders, those Outlook modules are not visible from
	OWA. For additional information, click the article number below to view the
	article in the Microsoft Knowledge Base:
	
	  Q186707 XWEB: Cannot Open a Contact or Calendar Public Folder in OWA
	
	This behavior is by design in the current version of OWA.
	
	WORKAROUND
	==========
	
	To work around this issue, allow this capability by using 32-bit Outlook forms
	and Hypertext Markup Language (HTML) forms. Further variations or customizations
	beyond those that are discussed in this article may require the assistance of
	Microsoft Developer Support. The following steps assume that Exchange Server and
	OWA have been installed and are functioning properly.
	
	Terms
	-----
	
	- Outlook modules. Outlook Calendar, Contacts, Tasks, Notes, and Journal
	  folders.
	
	- 32-bit Outlook client. Any version of Outlook for Microsoft Windows 95,
	  Microsoft Windows 98, or Microsoft Windows NT.
	
	- 32-bit Outlook forms. Custom forms created using the 32-bit Outlook client.
	
	- HTML Forms. Sometimes called Web Forms, these are HTML versions of 32-bit
	  Outlook forms.
	
	- HTML Form Converter. A utility that is designed to assist in converting some
	  32-bit Outlook forms into HTML Forms.
	
	Using 32-bit Outlook Forms and HTML Forms
	-----------------------------------------
	
	1. Install the Existing Items Converter for Outlook.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q241220 OL2000: General Information About the Existing Items Converter
	
	2. Create a new public folder as a standard mail items folder. Click the newly
	  created folder from Outlook.
	
	3. Use 32-bit Outlook to open a standard contact form and enter design mode by
	  clicking Forms on the Tools menu, and then clicking Design this Form.
	
	4. Edit the form as necessary, click Forms on the Tools menu, and then click
	  Publish Form As. Use a unique name (for example, IPM.Contact.Custom) when you
	  publish the form. Publish the form to the public folder that you created
	  earlier.
	
	5. Create at least one contact in the public folder by using the newly installed
	  form.
	
	6. Use the Outlook Existing Items converter to change the message class of the
	  items in this folder to match the newly created forms message class (for
	  example, IPM.Contact.Custom).
	
	7. Open the properties of the public folder, click the General tab, and then
	  click the custom form in the "When posting to this folder, use" box. Click
	  OK.
	
	8. Use the HTML Form Converter to convert the new form.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q191014 How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	MORE INFORMATION
	================
	
	After you perform this procedure, when users access the public folder from
	either a 32-bit Outlook client or by using OWA the users see the correct content
	displayed by using the custom form. Furthermore, new items may be created in the
	folder by using the custom form from either a Messaging Application Programming
	Interface (MAPI) client or OWA.
	
	Additional query words: OL97, OL98, OL2000
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbAudDeveloper kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOutlook2000Search kbOutlook97Search kbOutlook98Search kbOWASearch kbZNotKeyword3 kbOutlookHTMLConv kbOWA550
	Version           : WINDOWS:5.5,97; :
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
