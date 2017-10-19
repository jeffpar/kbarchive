---
layout: page
title: "Q136413: How to Send E-mail to CompuServe Accounts"
permalink: /kb/136/Q136413/
---

## Q136413: How to Send E-mail to CompuServe Accounts

	Article: Q136413
	Product(s): The Microsoft Network
	Version(s): WINDOWS:1.2,1.3,2.0,2.5
	Operating System(s): 
	Keyword(s): kb3rdparty kbmsn
	Last Modified: 12-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 1.2, 1.3, 2.0, 2.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains a copy of the text of the message you receive from the
	Electronic Postmaster if you send an incorrectly addressed e-mail message to a
	CompuServe member.
	
	MORE INFORMATION
	================
	
	? Invalid receiver address: <address>
	
	Your message could not be delivered as addressed.
	
	--- Message From Postmaster ---
	
	Subject: Addressing CompuServe Mail users
	
	A message you sent to a CompuServe Mail user could not be delivered due to an
	incorrect address. The correct method of addressing CompuServe Mail users is
	outlined below.
	
	Five types of CompuServe Mail addresses can be reached from the Internet as
	follows:
	
	a. Members of the CompuServe Information Service have an address (a.k.a. User
	  ID) of the form "xxxxx,yyyy", such as "74906,1610". To send mail to such an
	  address from the Internet, change the comma to a period and attach
	  "@CompuServe.com". For instance:
	
	  74906.1610@CompuServe.com
	
	b. Members of organizations with a private CompuServe Mail area have an address
	  of the form "organization:name", such as "ABC:J.SMITH". To send mail to such
	  an address from the Internet, send it to "name@organization.CompuServe.com".
	  For instance:
	
	  J.SMITH@ABC.CompuServe.com
	
	  A few organizations also include a department in the form
	  "organization:department:name", such as "ABC:ACCTG:JOHN". To send mail to
	  such an address, send to "name@department.organization.CompuServe.com". For
	  instance:
	
	  JOHN@ACCTG.ABC.CompuServe.com
	
	c. Members of organizations whose LAN mail system is connected to the CompuServe
	  Mail Hub via Novell NetWare MHS have an address of the form "name@workgroup",
	  such as "JSMITH@ABC". To send mail to such an address from the Internet, send
	  it to "name@workgroup.MHS.CompuServe.com". For instance:
	
	  JSMITH@ABC.MHS.CompuServe.Com
	
	d. Members of organizations whose LAN mail system is connected to the CompuServe
	  Mail Hub via cc:Mail have an address of the form "name at postoffice", such
	  as "JSMITH at ABC". To send mail to such an address from the Internet, send
	  it to "name@postoffice.ccmail.CompuServe.com". For instance:
	
	  JSMITH@ABC.CCMAIL.CompuServe.Com
	
	e. Members of organizations whose X.400 mail system is connected to CompuServe
	  as a CompuServe PRMD. Their X.400 addresses will have a Country value of "US"
	  and an ADMD value of "CompuServe", such as
	  "x400:(c=US;a=CompuServe;p=ABC;s=Smith;g=John)". To send mail to such an
	  address, send it to "/s=surname/g=givenname/@prmd.X400.CompuServe.COM". For
	  instance:
	
	  /s=Smith/g=John/@ABC.X400.CompuServe.COM.
	
	  Note that the Country and ADMD values are NOT needed on the left side of the
	  at sign. Those values are implied by the ".X400.CompuServe.COM" portion of
	  the address.
	
	  The "tags" (i.e. the "/s=" and "/g=") are as follows:
	
	       /O    Organization
	       /OU   Organizational Unit
	       /S    Surname
	       /G    Given Name
	       /I    Initials
	       /Q    Generation Qualifiers
	       /U    UA Unique ID
	       /X    X.121 Address
	       /T    Terminal ID
	       /D    Domain Defined Attribute
	             (/DD and /DDA are also acceptable)
	             NOTE: In a Domain Defined Attribute, the type and value
	             are to be separated by an equal sign.
	
	Please note that a number of special destinations available to users of
	CompuServe Mail which are NOT accessible from the Internet, including:
	
	   Facsimile Delivery                  (e.g. FAX: )
	   Postal Delivery                     (e.g. POSTAL: )
	   Telex Delivery                      (e.g. TLX: )
	   MCI Mail Delivery                   (e.g. MCIMAIL: )
	
	Finally, please realize that only CompuServe Mail users have access to our member
	directory. Since there is no mechanism for you to obtain addresses directly from
	CompuServe Incorporated, you should obtain this information from the individuals
	with whom you wish to correspond.
	
	Thank you.
	
	  Cordially,
	
	  The Electronic Postmaster
	
	For more information on this topic you can visit the following CompuServe Web
	site
	
	  http://world.compuserve.com/cs/csfaq.htm
	
	a Compuserve FAQ site which answers this CompuServe e-mail question.
	
	Additional query words: msn compu serve cis
	
	======================================================================
	Keywords          : kb3rdparty kbmsn 
	Technology        : kbMSNSearch kbMSN200 kbMSN130 kbMSN250 kbMSN120
	Version           : WINDOWS:1.2,1.3,2.0,2.5
	Issue type        : kbhowto
	
	=============================================================================
	
