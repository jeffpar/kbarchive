---
layout: page
title: "Q164528: XADM: MTA Conversion Error and NDR"
permalink: /kb/164/Q164528/
---

## Q164528: XADM: MTA Conversion Error and NDR

{% raw %}

	Article: Q164528
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 16-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Server message transfer agent (MTA) fails to handle a
	legal encoding of the P2 field notification-requests. The content conversion
	process from P2 to MDBEF fails and a non-delivery report (NDR) is generated.
	
	The following event IDs may be seen:
	
	  message NMI0210: X.400 Service Event, severity 14
	
	            (MTA DISP:FANOUT(15) Proc 112) 10-30-96 02:04:35pm
	            Content conversion failed
	              Object at fault  06000046
	              Conversion error 26
	              MTS Identifier   C=AT;A=ADA;L=1905031430101996/A33827/ADA1
	              Old content type 56010A00
	              New content type 2A864886F7140501
	
	  message NMI0062: X.400 Service Event, severity 12
	
	            (MTA DISP:FANOUT(15) Proc 112) 10-30-96 02:04:35pm
	            Delivery failure
	              X.400 reason code     unable-to-transfer
	              X.400 diagnostic code content-type-not-supported
	              Internal qualifier    0
	              MTS Identifier C=AT;A=ADA;L=1905031430101996/A33827/ADA1
	
	  message NMI0290: X.400 Service Event, severity 12
	
	            (MTA DISP:RESULT(20) Proc 136) 10-30-96 02:04:36pm
	            Generating Non-Delivery report
	              Reason code        unable-to-transfer
	              Diagnostic code    content-type-not-supported
	              Recipient Number   1
	              Original recipient C=AT;A=ADA;P=282;S=POSTMASTER;
	              Reassigned to      DN:/o=rac/ou=mbm-
	  1/cn=Recipients/cn=p<A7>C=AT;A=ADA;P=282;S=POSTMASTER;
	              Original MTS identifier
	  C=AT;A=ADA;L=1905031430101996/A33827/ADA1
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0.
	
	
	A supported fix is now available, but has not been fully regression- tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	MORE INFORMATION
	================
	
	The MTA mishandles the element, as marked below in the following example of the
	P2 data:
	
	      A080     : 0ipdu : IPM
	       3180     : 0ihed : IPMessageHeading
	        6B80     : 0ipid : IPMIdentifier
	         1329     : 0urid : LocalIPMIdentifier
	  ="1905031430101996/A33827/ADA1/11AAF3830100"
	        0000
	
	        A080     : 0orig : Originator
	         6080     : dornm : ORName
	          3080     : dsatt : StandardAttributeList
	           6180     : dctry : CountryName
	            1302     : dcacd : CountryNameISO3166Alpha2      ="AT"
	           0000
	
	           6280     : dadmd : AdministrationName
	            1303     : dadmp : AdminNamePrintable            ="ADA"
	
	           0000
	           8303     : dorgn : OrganisationName              ="RAC"
	
	           A580     : dpers : PersonalName
	            8008     : dsurn : SurName                       ="OPER_GEN"
	
	           0000
	          0000
	         0000
	        0000
	        A280     : 0prir : PrimaryRecipients
	         3180     : 0rcip : Primary Recipient
	          A080     : 0ords : ORDescriptor
	           6080     : dornm : ORName
	            3080     : dsatt : StandardAttributeList
	             6180     : dctry : CountryName
	              1302     : dcacd : CountryNameISO3166Alpha2      ="AT"
	             0000
	
	             6280     : dadmd : AdministrationName
	              1303     : dadmp : AdminNamePrintable            ="ADA"
	
	             0000
	             A280     : dprmd : PrivateDomainName
	              1203     : dprmn : PrivateDomNameNumeric         ="0x323832"
	
	             0000
	             A580     : dpers : PersonalName
	              800A     : dsurn : SurName
	  ="POSTMASTER"
	
	             0000
	            0000
	           0000
	          0000
	          8101     : 0repr : ReportRequest              <<<<<Bitstring -
	  length 1 indicates zero bits in Bitstring
	         0000
	
	        0000
	        A880     : 0subj : Subject
	         1416     : Ctexs : TeletexString
	  ="0x5834303020546573742075656265722054616E64656D"
	
	        0000
	        8C01     : 0impt : Importance                 Normal
	        8E01     : 0afwd : Autoforwarded              TRUE
	       0000
	
	       3080     : 0ibdy : IPMessageBody
	        A080     : 0bdyp : BodyPart                        : 0ia5t :
	  IA5Tex
	         3180     : 0ia5p : Ia5TextParam
	          8001     : 0rept : Repertoire                 ia
	         000
	
	         1614     : Cia5s : IA5String                     ="Das ist ein
	  Test
	
	  "
	
	        0000
	       0000
	         0000
	
	
	Additional query words: pop-up popup
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
