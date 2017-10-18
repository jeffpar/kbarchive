---
layout: page
title: "Q175044: HOWTO: Implement a MessageFilter in VFP Using Active Messaging"
permalink: kb/175/Q175044/
---

## Q175044: HOWTO: Implement a MessageFilter in VFP Using Active Messaging

	Article: Q175044
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbcode kbole kbMsg kbvfp300 kbvfp500 kbvfp600 kbFAQ kbATL300faq
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	- Extended Messaging Application Programming Interface (MAPI), version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Many FoxPro developers may not be aware that the Active Messaging library exists
	for them to use as an extremely robust alternative to canned MAPI controls. This
	article is designed as part of a short (non-interdependent) series intended to
	provide FoxPro developers with information, development tips, and useful
	snippets about the Microsoft Active Messaging Library.
	
	This article provides an introductory overview of working with the Session's
	MessageFilter object by providing a short code snippet demonstrating how to
	implement a MessageFilter and setting a few of the filtering attributes
	available.
	
	For additional information, on where to acquire the Active Messaging library,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q171440 Where to Acquire the Collaboration Data Objects Library
	
	
	MORE INFORMATION
	================
	
	Being a database developer, you are most likely aware of both the concept and
	benefits of applying filters to tables in order to process only a set of records
	that meet a certain criteria. The same concept applies equally well to Messages
	(for example: I want to see only unread messages, or only messages from a
	certain person, ...). The following code sample demonstrates how to implement
	this functionality in Visual FoxPro using the Active Messaging library:
	
	     * AM_MessageFilter.PRG
	     * --------------------
	     *
	     *Create a MAPI Session object then Logon. The Logon dialog can be
	     *bypassed by providing a valid ProfileName as the first parameter
	     *(as a string) to the Logon Method as seen below.
	     objSession = CREATEOBJECT("mapi.session")
	     objSession.Logon    &&objSession.Logon("YourProfileName")
	
	     *Instantiate a MessageFilter Object on the Inbox's Messages collection
	     objMsgColl = objSession.Inbox.Messages
	     objMsgFilter = objMsgColl.Filter
	
	     *Setup the criteria for the MessageFilter
	     objMsgFilter.Text = "test test"
	     objMsgFilter.Unread = .T.  && Filter for unread messages
	
	     *By default the two conditions noted above are logically ANDed, this
	     *can be changed however to a logical OR instead by uncommenting the
	     *next line
	     *objMsgFilter.Or = .T.
	
	     *Message filter is now specified; ready for display loop
	     FOR EACH objMess IN objMsgColl && Operates only on messages post filter
	        MESSAGEBOX("Message not read: " + objMess.Subject)
	     NEXT
	
	     *Clean up then bail
	     objSession.Logoff
	     RELEASE objMessage, objMsgFilter, objMsgColl, objSession
	
	NOTE: If you intend to apply the MessageFilter for only a specific task then
	continue processing as normal with the full Messages Collection available, you
	MUST be careful and release both the MessageFilter and refresh the Messages
	Collection. While this sounds obvious enough when reading it in print, it is a
	common mistake when using MessageFilters.
	
	REFERENCES
	==========
	
	Generic information on Active Messaging can be found on the MSDN, or in the
	Olemsg.hlp file, which can be found by following the directions in the Microsoft
	Knowledge Base Article Q171440, referenced earlier in this article.
	
	Additional query words: Active Messaging
	
	======================================================================
	Keywords          : kbcode kbole kbMsg kbvfp300 kbvfp500 kbvfp600 kbFAQ kbATL300faq 
	Technology        : kbVFPsearch kbAudDeveloper kbMAPISearch kbZNotKeyword kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a kbMAPIExt
	Issue type        : kbhowto
	
	=============================================================================
	
