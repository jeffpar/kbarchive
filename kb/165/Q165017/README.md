---
layout: page
title: "Q165017: Description of Event ID 9302"
permalink: /kb/165/Q165017/
---

## Q165017: Description of Event ID 9302

	Article: Q165017
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	When you look through event logs, you might come across the following warning
	message:
	
	  Event id 9302
	
	Description from the Infollog.cfg file from the Exchsrvr\Mtadata directory:
	
	  The transport configuration type %1 for the directory entry %2 is not
	  one of the supported values. Reconfigure the transport configuration
	  type in the identified directory entry. [%3 %4 %5 %6] (8)
	
	***************************************************************************
	* MESSAGE DESCRIPTION: Bad Transport config
	***************************************************************************
	*
	* MSG LABEL        INFOID    INFOTYPE  SEVERITY  COMMENT
	*
	SBCDBTRN           9302    W 7         8         Bad Transport config
	*
	* PARAMETER LABEL  PARMID  PARMTYP DIAGLEV MAXLEN  COMMENT
	*
	TRANTYPE           130     I       1       0       Transport type
	TRANSDN            146     S       1       0       Entry DN
	*
	-          Bad transport config : type = %1 (see OTCSFIRE.C)
	-            Entry DN %2
	
	Sample warning message:
	
	  The transport configuration type 1 for the directory entry
	  /o=Microsoft/ou=Cartoonville/cn=Configuration/cn=Servers/cn=SAMEERP66
	  /cn=Microsoft MTA is not one of the supported values. Reconfigure the
	  transport configuration type in the identified directory entry.
	  [BASE IL OPERATOR 34 217] (8)
	
	
	The list for the transport types are as follows:
	
	Type     0x01    stands for  RFC 1006
	Type     0x02    stands for  TP4
	Type     0x03    stands for  Eicon X.25
	Type     0x04    stands for  Named pipes over RAS connection
	Type     0x05    stands for  RPC
	
	MORE INFORMATION
	================
	
	This warning message does not reflect any problems with Microsoft Exchange
	Server. Look at other warnings and/or errors associated with this warning for
	more troubleshooting information.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
