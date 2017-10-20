---
layout: page
title: "Q225500: XCLN: CDO Search of GAL for CdoPR_MHS_COMMON_NAME is Slow"
permalink: /kb/225/Q225500/
---

## Q225500: XCLN: CDO Search of GAL for CdoPR_MHS_COMMON_NAME is Slow

{% raw %}

	Article: Q225500
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 EXC55SP3Fix
	Last Modified: 30-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When using CDO to find entries in a large Exchange Server global address list
	(GAL) using the property CdoPR_MHS_COMMON_NAME, the operation can take a long
	time to complete. The CdoPR_MHS_COMMON_NAME property is sometimes referred to as
	the "alias" or "mailbox" name.
	
	Consider the following Visual Basic code-fragment:
	(Assume that the MAPI session is already established, and that NameToSearch
	contains a string name).
	
	  Dim objSession As MAPI.Session
	  Dim objAddrEntFilt As MAPI.AddressEntryFilter
	  Dim objAddressEntries As MAPI.AddressEntries
	  Dim objAddressEntry As MAPI.AddressEntry
	
	  Set objAddressEntries = objSession.AddressLists("Global Address List").AddressEntries
	      
	  objAddrEntFilt.Fields.Add (CdoPR_MHS_COMMON_NAME), NameToSearch
	          
	  Set objAddressEntry = objAddressEntries.GetFirst
	
	The objAddressEntries.GetFirst method may take a long time to execute based on
	the size of the global address list.
	
	CAUSE
	=====
	
	With respect to the AddressEntryFilter object, the platform SDK currently
	documents the following:
	
	  For fields of data type String, the restriction type is RES_CONTENT with
	  fuzzy level options FL_SUBSTRING, FL_IGNORECASE, and FL_LOOSE. However, the
	  following MAPI properties are compared using FL_PREFIX instead of
	  FL_SUBSTRING:
	
	  PR_ACCOUNT
	  PR_BUSINESS_ADDRESS_CITY
	  PR_COMPANY_NAME
	  PR_DEPARTMENT_NAME
	  PR_DISPLAY_NAME
	  PR_GIVEN_NAME
	  PR_OFFICE_LOCATION
	  PR_SURNAME
	  PR_TITLE
	
	Because CdoPR_MHS_COMMON_NAME (PR_MHS_COMMON_NAME) is not listed, a search
	(restriction) using this MAPI property will result in a restriction type of
	RES_CONTENT with the fuzzy level options FL_SUBSTRING, FL_IGNORECASE, and
	FL_LOOSE. These fuzzy level options result in an inefficient (wildcard type of)
	search mechanism, and it is recommended that searches for MAPI properties not
	using FL_PREFIX be avoided.
	
	RESOLUTION
	==========
	
	A modification was made to Cdo.dll to treat PR_MHS_COMMON_NAME as it does
	PR_ACCOUNT (and the other MAPI properties listed above) which results in an
	efficient FL_PREFIX search.
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Cdo.dll
	
	+------------------------+
	| File name | Version    | 
	+------------------------+
	| Cdo.dll   | 5.5.2580.0 | 
	+------------------------+
	
	
	WORKAROUND
	==========
	
	Extended MAPI could be used instead of Cdo.dll providing more control for the
	creation of restrictions.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
