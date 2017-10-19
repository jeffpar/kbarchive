---
layout: page
title: "Q305096: SMS: User Unable to Browse Criteria Values Without Class Rights"
permalink: /kb/305/Q305096/
---

## Q305096: SMS: User Unable to Browse Criteria Values Without Class Rights

	Article: Q305096
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbenv kbtool kbui kbsms120 kbsms120bug
	Last Modified: 16-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a user that does not have class-level read or read-resource rights to the
	Collections class attempts to construct a query, and subsequently attempts to
	browse a list of attribute values by clicking the Values button on the General
	tab of the Criterion Properties dialog box, no results are returned for any
	hardware or software class attributes. Note that this may occur even though the
	user has read-resource rights to the instance of the collection to which the
	query is limited.
	
	CAUSE
	=====
	
	Collection limiting for a query is not implemented when you click the Values
	button on the General tab of the Criterion Properties dialog box. Without
	collection limiting, unless the user has class-level read and read resource
	rights to collections class, no results are returned when you click the Values
	button.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Only apply it to systems
	that are experiencing this specific problem. This fix may receive additional
	testing. Therefore, if you are not severely affected by this problem, Microsoft
	recommends that you wait for the next Systems Management Server (SMS) service
	pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, visit the following Microsoft
	Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are ordinarily incurred for support calls
	may be canceled if a Microsoft Support Professional determines that a specific
	update will resolve your problem. The usual support costs will apply to
	additional support questions and issues that do not qualify for the specific
	update in question.
	
	The English post-SMS 2.0 Service Pack 3 version of this fix should have the
	following file attributes or later:
	
	  Date         Time   Version         Size       File name      Platform
	  ----------------------------------------------------------------------
	  01-Mar-2001  15:00  2.0.1493.3200     540,672  Mmcbasui.dll   Intel
	  01-Mar-2001  17:05  2.0.1493.3213     207,056  Sms_pcol.dll   Intel
	  01-Mar-2001  17:05  2.0.1493.3213     101,056  Sms_pqry.dll   Intel
	  01-Mar-2001  15:00  2.0.1493.3200   1,008,400  Mmcbasui.dll   Alpha 
	  01-Mar-2001  17:05  2.0.1493.3213     404,752  Sms_pcol.dll   Alpha 
	  01-Mar-2001  17:05  2.0.1493.3213     197,904  Sms_pqry.dll   Alpha
	
	NOTE: Due to file dependencies, the most recent hotfix or feature that contains
	the above files may also contain additional files.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article. This problem was first corrected in
	the Systems Management Server 2.0 Service Pack 4 Hotfix Rollup Package (HRP).
	
	For additional information about the SMS 2.0 SP4 HRP, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q323206 SMS: List of Bugs Fixed in the Systems Management Server 2.0 SP4 HRP
	
	MORE INFORMATION
	================
	
	To install the hotfix, use the appropriate method on the SMS site server and
	each computer that is running an instance of the administrator console.
	
	Using the Hotfix Installer
	--------------------------
	
	NOTE: You can use this method only on Intel-based computers.
	
	1. Copy the hotfix folder structure to a share on your network. Q305096.exe is
	  an SMS Installer file that updates specific files on your site server.
	
	2. Log on to your site server by using an account with administrative
	  privileges.
	
	3. On the site server, quit the SMS administrator console.
	
	4. Run Q305096.exe, and then follow the directions in the wizard. You can run
	  the file in Quiet mode by using the "/s" (without the quotation marks)
	  switch.
	
	Manual Installation
	-------------------
	
	1. Copy the following SMS Administrator console files to a disk or network
	  share:
	
	   - Sms_pcol.dll
	
	   - Sms_pqry.dll
	
	   - Mmcbasui.dll
	
	2. At the SMS site server, use Regsvr32.exe to unregister the files you are
	  about to overwrite:
	
	   - <SMS_root>\bin\<processor type>\Sms_pcol.dll
	
	   - <SMS_root>\bin\<processor type>\Sms_pqry.dll
	
	3. Make a backup copy of the files:
	
	   - <SMS_root>\bin\<processor type>\Sms_pcol.dll
	
	   - <SMS_root>\bin\<processor type>\Sms_pqry.dll
	
	   - <SMS_root>\bin\<processor type>\Mmcbasui.dll
	
	4. Copy the updated files from the disk or network share to the SMS site server
	  folder:
	
	   - <SMS_root>\bin\<processor type>\Sms_pcol.dll
	
	   - <SMS_root>\bin\<processor type>\Sms_pqry.dll
	
	   - <SMS_root>\bin\<processor type>\Mmcbasui.dll
	
	5. Use Regsvr32.exe to register the updated files:
	
	   - <SMS_root>\bin\<processor type>\Sms_pcol.dll
	
	   - <SMS_root>\bin\<processor type>\Sms_pqry.dll
	
	To Update a Remote SMS Administrator Console
	--------------------------------------------
	
	NOTE: Before you implement this update on your SMS administrator console, you
	must install it on the SMS site servers in your environment.
	
	1. From the updated SMS site server, copy the following SMS administrator
	  console files to a disk or network share:
	
	   - <SMS_root>\bin\<processor type>\Sms_pcol.dll
	
	   - <SMS_root>\bin\<processor type>\Sms_pqry.dll
	
	   - <SMS_root>\bin\<processor type>\Mmcbasui.dll
	
	2. At the SMS administrator console, use Regsvr32.exe to unregister the files
	  you are about to overwrite:
	
	   - <SMSAdmin_root>\bin\<processor type>\Sms_pcol.dll
	
	   - <SMSAdmin_root>\bin\<processor type>\Sms_pqry.dll
	
	3. Make a backup copy of the files:
	
	   - <SMSAdmin_root>\bin\<processor type>\Sms_pcol.dll
	
	   - <SMSAdmin_root>\bin\<processor type>\Sms_pqry.dll
	
	   - <SMSAdmin_root>\bin\<processor type>\Mmcbasui.dll
	
	4. Copy the updated files from the diskette or network share to the SMS
	  Administrator console folder:
	
	   - <SMSAdmin_root>\bin\<processor type>\Sms_pcol.dll
	
	   - <SMSAdmin_root>\bin\<processor type>\Sms_pqry.dll
	
	   - <SMSAdmin_root>\bin\<processor type>\Mmcbasui.dll
	
	5. Use Regsvr32.exe to register the updated files:
	
	   - <SMSAdmin_root>\bin\<processor type>\Sms_pcol.dll
	
	   - <SMSAdmin_root>\bin\<processor type>\Sms_pqry.dll
	
	With this hotfix applied, browsing for values from the query builder criterion
	property page returns valid attributes for the collection to which the query is
	limited.
	
	For example, if you construct a query in which the criteria includes Operating
	System\Caption, and the query has been limited to a collection that only
	includes computers that are running Microsoft Windows 2000 Professional, the
	browse list will only include an entry for Windows 2000 Professional as the
	Operating System Caption.
	
	NOTE: For this new functionality to work, you must browse for the collection to
	which you are limiting the query. If the collection name is manually typed, the
	collection limiting will not be properly set for the purposes of browsing
	query-criterion-attribute values.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbenv kbtool kbui kbsms120 kbsms120bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
