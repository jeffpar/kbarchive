---
layout: page
title: "Q268526: Buffer Limit Exceeded Importing Exchange Groups in Metadirectory"
permalink: /kb/268/Q268526/
---

## Q268526: Buffer Limit Exceeded Importing Exchange Groups in Metadirectory

	Article: Q268526
	Product(s): Microsoft Windows NT
	Version(s): 2.1
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbtool
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Metadirectory Services 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Lightweight Directory Access Protocol (LDAP) Microsoft Exchange
	Management Agent (MA) and import groups into the metadirectory, its buffer limit
	may be exceeded and you may receive the following error messages in the
	Zscript.log file on log level four:
	
	  Checking connector space for obsolete records at 13:17:23...
	  update $cs.zcDsCdHandle [<binary>] with [<binary>]
	  0001-CONNECTOR MODIFIED[00]:
	  IST=dlmmsATCEXCH4,cn=Dlists,ou=DIRSYNCH,o=ICL,ma=Wayne,DsaName=minimi,
	  ou=Applications,o=PSS,dc=Microsoft,dc=com
	  0001-META UNCHANGED[00]:
	  LIST=dlmmsATCEXCH4,CN=Dlists,OU=DIRSYNCH,o=ICL,o=PSS,dc=Microsoft,dc=com in
	  template [zcDscConstruction] in the statement starting at line 105
	
	-or-
	
	  ERROR 19008: DS_RC_BUFFER_TOO_SMALL
	
	CAUSE
	=====
	
	This behavior can occur when a variable assignment has a statement that
	encounters a hard-coded limit. The following list must be processed separately:
	
	  $v_lm = ($list_member("(+uniquemember:+$v_ldapDn)"))
	
	RESOLUTION
	==========
	
	To resolve this behavior, you must make changes to the templates, by following
	these steps:
	
	1. Click Design MA.
	
	2. Click the Control Connected Directory tab.
	
	3. Click the Output Templates tab
	
	4. In the Add and Modify tabs, make the following changes :
	
	  ($list_member($v_member))
	  Comment out: #($v_lm)
	
	Then make further changes to the template, by following these steps:
	
	1. Click Design MA.
	
	2. Click the Control Connected Directory tab.
	
	3. Click Output Construction Template.
	
	4. Click CD Lists from Connectors and make the following change:
	
	  if $EXIST ( $v_ldapDn ) = T
	  then
	  if $CS.zcLdapGroupType = groupOfUniqueNames
	  then
	  $v_member = +uniquemember:+$v_ldapDn
	  else
	  $v_member = +member:+$v_ldapDn
	  endif
	  endif
	
	Then use the following steps to comment out (disable) lines from the templates:
	
	1. Click Design MA.
	
	2. Click the Control Connected Directory tab.
	
	3. Click Output Construction Template.
	
	4. Click CD Accounts from Connectors.
	
	5. Comment out the following statements:
	
	  # if $AT.zcLdapGroupType = groupOfUniqueNames
	  # then
	  # $v_lm = ($list_member("(+uniquemember:+$v_ldapDn)"))
	  # else
	  # $v_lm = ($list_member("(+member:+$v_ldapDn)"))
	  # endif
	
	STATUS
	======
	
	The preceding behavior has been resolved in Microsoft Metadirectory Services
	version 2.2 with the same template modifications.
	
	Additional query words: Zoomit Via MA zscript genlogs
	
	======================================================================
	Keywords          : kbenv kberrmsg kbtool 
	Technology        : kbMMSSearch kbMMS210
	Version           : :2.1
	Issue type        : kbprb
	
	=============================================================================
	
