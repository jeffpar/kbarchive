---
layout: page
title: "Q175432: HOWTO: Walk the Fields Collection of a Message in Active Msg"
permalink: /kb/175/Q175432/
---

## Q175432: HOWTO: Walk the Fields Collection of a Message in Active Msg

	Article: Q175432
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbcode kbActMsg kbvfp300 kbvfp500 kbvfp600
	Last Modified: 02-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Many Visual FoxPro developers might not be aware that the Active Messaging
	library exists for them to use as an extremely robust alternative to canned mail
	messaging API (MAPI) controls. This article is designed as part of a short
	(non-interdependent) series intended to provide Visual FoxPro developers with
	information, development tips, and useful snippets about the Microsoft Active
	Messaging Library.
	
	This article introduces some aspects of working with a Message objects Fields
	Collection by providing a short code snippet demonstrating how to cycle through
	the Fields Collection of a sample Message.
	
	MORE INFORMATION
	================
	
	Cycling through the fields collection can be particularly useful when trying to
	debug a Messaging application. This is especially true if this method is built
	upon to allow walking the collections of two different messages simultaneously
	and finding the differences between them.
	
	     * AM_FieldData.PRG
	     * ----------------
	     *
	     *Create a MAPI Session object then Logon. The Logon dialog can be
	     *bypassed by providing a valid ProfileName as the first parameter
	     *(as a string) to the Logon Method as seen below.
	     objSession = CREATEOBJECT("mapi.session")
	     objSession.Logon("Stevekl")
	
	     *Get a sample message - for this example we'll take whatever is at
	     *the top of the Inbox
	     objMessage = objSession.Inbox.Messages.GetFirst
	     objFieldsColl = objMessage.Fields
	
	     *A key component of a Message Object is it's Fields Collection. The
	     *Fields Collection is composed of a variable number of Field Objects
	     *that each possess the properties: Name, Value, Type, and ID
	     intFldCnt = objFieldsColl.Count
	     ctrThisField = 1
	     FOR ctrThisField =1 TO intFldCnt
	
	        *Display Name, Value, Type, and ID properties of the Field Object
	        DO CASE
	           CASE TYPE("objFieldsColl.Item(ctrThisField).Value") = "C"
	              strValue = objFieldsColl.Item(ctrThisField).Value
	           CASE TYPE("objFieldsColl.Item(ctrThisField).Value") = "N"
	              strValue = ;
	                 ALLTRIM(STR(objFieldsColl.Item(ctrThisField).Value,30,10))
	           OTHERWISE
	              *There is a potential that a field may contain data types
	              *not support for display by Visual FoxPro.
	              strValue = "Not Displayed"
	        ENDCASE
	        MESSAGEBOX(;
	           "Field #" + ALLTRIM(STR(ctrThisField)) + " of " ;
	           +    ALLTRIM(STR(intFldCnt)) ;
	           +    CHR(13) + CHR(10) ;
	           + "Name : " ;
	           +    objFieldsColl.Item(ctrThisField).Name ;
	           +    CHR(13) + CHR(10) ;
	           + "Value: " ;
	           +    strValue ;
	           +    CHR(13) + CHR(10) ;
	           + "Type : " ;
	           +    ALLTRIM(STR(objFieldsColl.Item(ctrThisField).Type)) ;
	           +    CHR(13)+CHR(10) ;
	           + "ID   : " ;
	           +    ALLTRIM(STR(objFieldsColl.Item(ctrThisField).ID,20)))
	
	     NEXT ctrThisField
	
	     *Clean up then exit
	     objSession.Logoff
	     RELEASE objFieldsColl, objMessage, objSession
	
	REFERENCES
	==========
	
	For additional information on where to acquire the Active Messaging library, see
	the following information in the Microsoft Knowledge Base:
	
	  Q171440 Where to Acquire the Collaboration Data Objects Library
	
	
	Further generic information on Active Messaging can be found on the Microsoft
	Developer Network,or in the Olemsg.hlp file, which can be obtained by following
	the directions in Q171440.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbcode kbActMsg kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
