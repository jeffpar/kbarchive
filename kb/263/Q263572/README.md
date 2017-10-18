---
layout: page
title: "Q263572: HOWTO: Extract MAPI Properties of Current User in Outlook Form"
permalink: kb/263/Q263572/
---

## Q263572: HOWTO: Extract MAPI Properties of Current User in Outlook Form

	Article: Q263572
	Product(s): Microsoft Exchange
	Version(s): 1.2,1.21,5.5,8.03
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- Collaboration Data Objects (CDO), versions 1.2, 1.21 
	- Microsoft Outlook 2000 
	- Microsoft Outlook 98 
	- Microsoft Outlook 97, version 8.03 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Outlook object model provides only basic information about the current user,
	such as name, address, manager's name, and so on. You can use the Collaboration
	Data Objects (CDO) library within an Outlook form or add-in to provide more
	detailed information.
	
	MORE INFORMATION
	================
	
	1. Create a new Outlook form. To do this, on the Tools menu, click Forms, and
	  then click Design a Form. In the Type window, click Message.
	
	2. Click the (P.2) tab. On the Form menu, click Control Toolbox to display the
	  Control Toolbox. Add a command button to the form. By default, the name of
	  the new button is CommandButton1.
	
	3. On the Form menu, click View Code to open the form script window, and then
	  insert the following code into the window:
	
	    Sub CommandButton1_Click()
	    'Get data from Session.CurrentUser.
	
	    Dim cdoSession 'As MAPI.Session
	    Dim cdoAddrEntry 'As AddressEntry
	    Dim strData  'as string
	
	    'VBScript does not recognize constants!
	    ' Define them explicitly or use their value.
	    dim cdoPR_Account
	    dim cdoPR_Office_Location  
	    dim cdoPR_EntryID
	    dim cdoPR_Business_Telephone_Number
	    Dim vbCRLF
	
	    cdoPR_Account = &h3a00001e
	    cdoPR_Office_Location = &h3a19001e
	    cdoPR_EntryID = &h0fff0102
	    cdoPR_Business_Telephone_Number = &h3a08001f
	    vbCRLF = chr(13) & chr(10)
	
	    on error resume next
	
	    'Start the CDO code to find a match.
	    Set cdoSession = CreateObject("Mapi.session")
	    cdoSession.Logon ,,false,false,0   'Use the existing Outlook session.
	    if err.number <> 0 then msgbox "ERROR in logon: " & err.number & vbCRLF & err.description
	
	    'Get the AddressEntry of the recipient/current user.
	    Set cdoAddrEntry = cdoSession.CurrentUser
	    if err.number <> 0 then msgbox "ERROR getting AddressEntry: " & err.number & vbCRLF & err.description
	
	    'Get properties.
	    strData = "Account: " & cdoAddrEntry.fields(cdoPR_Account)
	    strData = strData & vbCRLF & "Location: " & cdoAddrEntry.fields(cdoPR_Office_Location)
	    strData = strData & vbCRLF & "Business Telephone Number: " & cdoAddrEntry.fields(cdoPR_Business_Telephone_Number)
	
	    Msgbox strData, 64 , "Information about current Outlook User"
	
	    'Explicitly release objects.
	    cdoSession.logoff 
	
	    Set cdoAddrEntry = Nothing
	    Set cdoSession = Nothing
	    End Sub
	
	4. Close the form script window.
	
	5. On the Form menu, click Run This Form to run the form.
	
	6. Click the (P.2) tab and then click the command button. Message boxes display
	  the current user's name, location, and business phone number.
	
	REFERENCES
	==========
	
	For additional information about Collaboration Data Objects (CDO), click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q171440 INFO: Where to Acquire the CDO Libraries (all versions)
	
	For additional information about installing the CDO library on an Outlook 98
	computer, see the following article:
	
	  Q180897 OL98: (CW) Object Models Available for Extending Messaging
	
	For additional information about installing the CDO libary on an Outlook 2000
	computer, see the following article:
	
	  Q198033 OL2000: (CW) Object Models Available for Extending Messaging
	
	Additional query words: user attributes OOM CDO MAPI GAL Addressbook Addresslist
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbAudDeveloper kbCDOsearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOutlook2000Search kbOutlook97Search kbOutlook98Search kbZNotKeyword3 kbOutlook803 kbCDO120 kbCDO121
	Version           : :1.2,1.21,5.5,8.03
	Issue type        : kbhowto
	
	=============================================================================
	
