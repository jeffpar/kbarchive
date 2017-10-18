---
layout: page
title: "Q253928: Err Msg: Error Was Encountered in Function : HrDoImport..."
permalink: kb/253/Q253928/
---

## Q253928: Err Msg: Error Was Encountered in Function : HrDoImport...

	Article: Q253928
	Product(s): Microsoft Windows NT
	Version(s): 2.1
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbtool
	Last Modified: 04-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Metadirectory Services, version 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using the Microsoft Exchange MAPI management agent (MA) and
	attempting to process custom recipients, you may receive the following error
	message:
	
	  Error was encountered in function : HrDoImport calling DAPIWrite.. Error
	  message : DAPIWrite for Mailbox /o=MICROSOFT/ou=MMSREPRO/cn=Custom
	  Recipients/cn=a0150094 failed with DAPI error 0xc0000120
	
	CAUSE
	=====
	
	This error message occurs because the zcDseUpdateHeader and zcDseUpdateAdd
	settings have incorrect entries. The zcDseUpdateAdd setting has a first letter
	of "M" (for Modify); it should have an "A" (for Add).
	
	The zcDseUpdateHeader setting is located in the Compass tool under Design MA,
	Connected Directory, Foreign Entries Output Template, and Header. The
	zcDseUpdateAdd setting is located in the Compass tool under Design MA, Connected
	Directory, Foreign Entries Output Template, and Add.
	
	RESOLUTION
	==========
	
	If your MA does not require a specialized head entry, disable the entries (by
	using a "#" character) in zcDseUpdateHeader. In zcDseUpdateAdd, change the first
	letter from "M" to "A". Operate your MA; the "A" allows the record to be
	presented as an add record to the connected directory.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	
	
	Additional query words: Zoomit Via MA zscript genlogs
	
	======================================================================
	Keywords          : kbenv kberrmsg kbtool 
	Technology        : kbMMSSearch kbMMS210
	Version           : :2.1
	Issue type        : kbprb
	
	=============================================================================
	
