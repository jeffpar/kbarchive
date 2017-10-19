---
layout: page
title: "Q176544: SMS: Err Msg: &quot;Couldn't Save the Query Result Format&quot;"
permalink: /kb/176/Q176544/
---

## Q176544: SMS: Err Msg: &quot;Couldn't Save the Query Result Format&quot;

	Article: Q176544
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbDatabase kbsms100 kbsms110 kbsms120 kbsms100bug kbsms110bug kbsms120bug
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to create a Define Query Results format and you use attributes that
	contain apostrophes, you may receive the following error message:
	
	  Couldn't Save the Query Result Format
	
	Or when you try to create a new Query Result format using the Systems Management
	Server Administrator program, you may receive the following error message:
	
	  Cannot save Query Result format
	
	CAUSE
	=====
	
	This error message occurs when an invalid character, such as an apostrophe (')
	is used in any of the fields other than the Description field during MIF form
	creation. These fields become the table names within the SMS database. The only
	character, other than actual letters and numbers, that SQL Server allows for
	inclusion in table names is the underscore character (_).
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Systems Management Server service pack that contains this fix.
	
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
	
	  Date     Time        Size      File name
	  ----------------------------------------
	
	  1/9/98   7:00pm      376,912   Base3.dll
	
	NOTE: This fix applies to Systems Management Server 1.2 only.
	
	
	NOTE: Due to file dependencies, the most recent hotfix or feature that contains
	the above files may also contain additional files.
	
	
	
	WORKAROUND
	==========
	
	To work around this problem, perform the following steps:
	
	1. Use the MIF Generator to re-create the .xnf file. Do not use any illegal
	  characters.
	
	2. Ensure that all existing copies of the old .xnf file are replaced with the
	  newly created .xnf file. For additional information, please see the following
	  article in the Microsoft Knowledge Base:
	
	  Q131614 Propagating MIF Entry Forms (XNF files) to SMS Clients
	
	3. Delete the corresponding .mif and .sev files from all clients in the
	  Ms\Sms\Noidmifs directory.
	
	4. Open the Systems Management Server Database Manager. On the Tools menu, click
	  Delete Group Classes.
	
	5. Select Personal Computer and click OK.
	
	6. Select the group representing the offending MIF information and click OK to
	  delete this group from the database.
	
	7. Have the clients re-enter any of the fields and save the new MIF.
	
	8. Have the clients log on again or otherwise run the Smsls.bat file to take
	  inventory and send the new MIF information to the server.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.0, 1.1, and 1.2.
	
	Additional query words: smsdatabase prodsms define custom logon
	
	======================================================================
	Keywords          : kbDatabase kbsms100 kbsms110 kbsms120 kbsms100bug kbsms110bug kbsms120bug 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
