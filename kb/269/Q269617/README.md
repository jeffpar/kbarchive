---
layout: page
title: "Q269617: HOWTO: Automatically Add Contacts to Outlook"
permalink: /kb/269/Q269617/
---

## Q269617: HOWTO: Automatically Add Contacts to Outlook

{% raw %}

	Article: Q269617
	Product(s): Microsoft FoxPro
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbAutomation kbOutlook kbvfp600 kbGrpDSFox kbDSupport kbOutlook2000 kbCodeSnippet
	Last Modified: 25-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0, used with:
	   - Microsoft Outlook 2000 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Outlook is an Automation Server. As such, you can programatically
	control it from other applications, sending data back and forth.
	
	MORE INFORMATION
	================
	
	The following example demonstrates how to import the Tasmanian Traders sample's
	Customer table into Outlook's Contacts folder.
	
	NOTE: The following example was written for use with Microsoft Visual FoxPro
	version 6.0.
	
	  #DEFINE olFolderContacts 10
	  #DEFINE olCurrency 14
	  #DEFINE olPercent 12
	
	  LOCAL loOutlook, loNameSpace, loFolder, loContact, loNewContact
	
	  CLOSE DATA ALL
	  USE HOME(2) + "TasTrade\data\customer"
	
	  *!* Get an object reference to Outlook
	  loOutlook = CREATE("Outlook.Application")
	  *!* Get the MAPI namespace (the only available one) 
	  *!* and find the Contacts folder
	  loNamespace = loOutlook.GetNameSpace("MAPI")
	  loFolder = loNameSpace.GetDefaultFolder(olFolderContacts)
	
	  *!* Add a subfolder below the standard Contacts folder
	  loContact = loFolder.folders.Add("Tasmanian Traders")
	
	  SCAN
	     loNewContact = loContact.Items.Add()  && Returns an object of type
	                                           && ContactItem
	     WITH loNewContact
	        .FullName = contact_name
	        .JobTitle = contact_title
	        .CompanyName = company_name
	        
	        *!* This makes the company name appear above the contact name in 
	        *!* Outlook. It will also sort by company name.
	        .FileAs = .CompanyName + " (" + ;
	           ALLTRIM(.LastName + ", " + .FirstName + " " + .MiddleName) + ")"
	  	
	        *!* Unfortunately, the Contacts table does not include email.
	        *!* Note: the property below is Email One Address. This is not clear
	        *!* under some fonts.
	        .Email1Address = "random@nospam.com"
	        .Email1AddressType = "SMTP"
	
	        lcAddress = ALLTRIM(address) + CHR(10) + ;
	           ALLTRIM(city) + ;
	           IIF(EMPTY(region), "", ", " + ALLTRIM(region)) + "  " + ;
	           ALLTRIM(postal_code) + ;
	           IIF(country != "USA", CHR(10) + ALLTRIM(country), "")
	        .HomeAddress = lcAddress
	
	        .BusinessTelephoneNumber = ALLTRIM(phone)
	        .BusinessFaxNumber = ALLTRIM(fax)
	        
	        *!* Create user-defined properties for extra fields
	        .UserProperties.Add("Max Order Amount", olCurrency)
	        .UserProperties.Add("Min Order Amount", olCurrency)
	        .UserProperties.Add("Discount", olPercent)
	        
	        *!* If you use numeric indexes here (1, 2, and 3) you'll
	        *!* find that the collection is alphabetical.
	        .UserProperties("Discount").Value = ROUND(discount / 100, 2)
	        .UserProperties("Max Order Amount").Value = max_order_amt
	        .UserProperties("Min Order Amount").Value = min_order_amt
	        
	        *!* ContactItem does not appear in Outlook until it is saved.
	        .Save
	     ENDwith
	  ENDscan
	
	  CLOSE DATA ALL
	
	After the preceding code is run, do the following to view the results:
	
	1. Open Microsoft Outlook and navigate to the Contacts\Tasmanian Traders folder.
	
	2. Double-click a contact to open it. Under the General tab, note that all the
	  fields for each contact, except for the three user-defined fields, are
	  visible.
	
	3. Select the All Fields tab to view the user-defined fields.
	
	For similar code in Microsoft Access, click the article number below to view the
	article in the Microsoft Knowledge Base:
	
	  Q290792 OL2002: How to Programmatically Export Outlook Items to Microsoft
	  Access
	
	REFERENCES
	==========
	
	For additional information about Outlook Automation, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q222101 HOWTO: Find and Use Office Object Model Documentation
	
	For detailed Help information about the various ContactItem fields and other
	Outlook objects, see the MSDN Library under Office Developer
	Documentation:Microsoft Office 2000 Language Reference:Microsoft Outlook 2000
	Reference.
	(c) Microsoft Corporation 2000, All Rights Reserved.
	Contributions by Garrett Fitzgerald, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAutomation kbOutlook kbvfp600 kbGrpDSFox kbDSupport kbOutlook2000 kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper
	Version           : :6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
