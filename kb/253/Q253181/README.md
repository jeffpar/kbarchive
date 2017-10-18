---
layout: page
title: "Q253181: Multivalued Attributes Pushed Incorrectly to Other LDAP Servers"
permalink: kb/253/Q253181/
---

## Q253181: Multivalued Attributes Pushed Incorrectly to Other LDAP Servers

	Article: Q253181
	Product(s): Microsoft Windows NT
	Version(s): 2.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Metadirectory Services 2.1, on platform(s):
	   - the operating system: Microsoft Windows NT, on platform(s):
	      - the hardware: Intel x86 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you push multivalued attributes with any of the Lightweight Directory
	Access Protocol (LDAP) management agents (MAs) to a connected directory, only
	the last value is written. For example, consider pushing the
	FacsimileTelephoneNumber multivalued attribute to an object with the following
	values:
	
	  FacsimileTelephoneNumber:999-1211
	  FacsimileTelephoneNumber:999-1212
	  FacsimileTelephoneNumber:999-1213
	
	This results in the following incorrect assignment:
	
	  FacsimileTelephoneNumber
	  999-1213
	
	The correct result should be:
	
	  FacsimileTelephoneNumber
	  999-1211
	  999-1212
	  999-1213
	
	CAUSE
	=====
	
	Cdir_ln.exe does not handle multivalued attributes properly when an ADD is sent.
	It works correctly when you update with a MOD.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next version of Microsoft Metadirectory Services that contains this
	fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date        Time     Size      File name
	  ------------------------------------------
	  04/19/00    04:35p   1334272   Importt.exe
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: Zoomit Via MA zscript genlogs
	
	======================================================================
	Keywords          :  
	Technology        : kbMMSSearch
	Version           : :2.1
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
