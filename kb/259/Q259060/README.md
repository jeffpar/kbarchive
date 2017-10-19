---
layout: page
title: "Q259060: Err Msg: Invalid Addition Response: 19 - CONSTRAINT VIOLATION..."
permalink: /kb/259/Q259060/
---

## Q259060: Err Msg: Invalid Addition Response: 19 - CONSTRAINT VIOLATION...

	Article: Q259060
	Product(s): Microsoft Windows NT
	Version(s): 2.1
	Operating System(s): 
	Keyword(s): kbenv kberrmsg
	Last Modified: 03-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Zoomit VIA, version 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you write custom recipients to Microsoft Exchange with the LDAP Exchange
	management agent, the Zscript.log file may contain the following error message:
	
	  Invalid addition response: 19 - CONSTRAINT VIOLATION for object
	
	CAUSE
	=====
	
	This issue occurs because Exchange is rejecting attributes based on their
	length. In Zoomit VIA 2.1, the attribute lengths are not correctly trimmed.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Zoomit VIA 2.1.
	
	Microsoft has corrected this issue in Microsoft Metadirectory Services (MMS) 2.1.
	
	MORE INFORMATION
	================
	
	In MMS 2.1, the following updates have been made to the ADD, MODIFY, and
	CONSTRUCTION templates.
	
	ADD and MODIFY Templates
	------------------------
	
	Replaced
	
	  MAPI-Recipient:
	
	with
	
	  (MAPI-Recipient: $v_MapiRecipient)
	
	Foreign Users OUTPUT CONSTRUCTION Template
	------------------------------------------
	
	Added either to the end of template, or immediately after the $v_oc assignment):
	
	  if $embedded("Remote-Address",$v_oc) = T
	  then
	  $v_MapiRecipient = 0
	  endif
	
	Added the following lines to the end of the foreign users OUTPUT CONSTRUCTION
	template:
	
	  $v_rdn = $trim($v_rdn,70)
	  $v_AccountName = $trim($v_AccountName, 64)
	  $v_AdminDisplayNameRdn = $trim($v_AdminDisplayNameRdn, 256)
	  $v_AliasName = $trim($v_AliasName, 64)
	  $v_company = $trim($v_company, 64)
	  $v_department = $trim($v_department , 64)
	  $v_description = $trim($v_description, 1024)
	  $v_facsimileTelephoneNumber = $trim($v_facsimileTelephoneNumber, 64)
	  $v_givenName = $trim($v_givenName, 64)
	  $v_homePhone = $trim($v_homePhone, 64)
	  $v_initials = $trim($v_initials, 6)
	  $v_mail = $trim($v_mail, 256)
	  $v_mobile = $trim($v_mobile, 64)
	  $v_pager = $trim($v_pager, 64)
	  $v_postalCode = $trim($v_postalCode, 40)
	  $v_sn = $trim($v_sn, 64)
	  $v_st = $trim($v_st, 128)
	  $v_targetaddress = $trim($v_targetaddress, 1123)
	  $v_telephoneNumber = $trim($v_telephoneNumber, 32)
	
	Additional query words: ma
	
	======================================================================
	Keywords          : kbenv kberrmsg 
	Technology        : kbZoomitSearch kbMSNonProductSearch kbZoomit210
	Version           : :2.1
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	
