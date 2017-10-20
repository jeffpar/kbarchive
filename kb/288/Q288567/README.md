---
layout: page
title: "Q288567: SMS: Collection Evaluator Does Not Include Subcollection Data"
permalink: /kb/288/Q288567/
---

## Q288567: SMS: Collection Evaluator Does Not Include Subcollection Data

{% raw %}

	Article: Q288567
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0 SP2,2.0 SP3
	Operating System(s): 
	Keyword(s): kbsms200 kbAdvertisement kbCollections
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0 SP2, 2.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you update a collection manually in the Systems Management Server (SMS)
	Administrator console by clicking Update Collection Membership, the resulting
	collection update (.psd) file that is sent to the secondary site does not
	contain any subcollection information. However, when the same collection is
	updated by the Monitor Collections thread of the SMS Executive service at the
	scheduled interval, the collection update file contains the correct
	subcollection data.
	
	This behavior causes advertisements that are made to subcollections through the
	relationship to the parent collection not to work until the collection is
	updated according to its defined update schedule.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Only apply it to systems
	that are experiencing this specific problem. This fix may receive additional
	testing. Therefore, if you are not severely affected by this problem, Microsoft
	recommends that you wait for the next Systems Management Server service pack
	that contains this fix.
	
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
	
	The SMS 2.0 post-Service Pack 2 (SP2) version of this fix should have the
	following file attributes or later:
	
	  Date         Time   Version         Size     File name     Platform
	  -------------------------------------------------------------------
	  10-Jun-2000  20:15  2.00.1493.2201  145,168  Colleval.dll  Alpha
	  10-Jun-2000  20:15  2.00.1493.2201   90,000  Colleval.dll  I386
	
	The SMS 2.0 post-Service Pack 3 (SP3) version of this fix should have the
	following file attributes or later:
	
	  Date         Time   Version         Size     File name     Platform
	  -------------------------------------------------------------------
	  01-Mar-2001  10:05  2.00.1493.3138  145,168  Colleval.dll  Alpha
	  01-Mar-2001  10:05  2.00.1493.3138   90,000  Colleval.dll  I386
	
	NOTE: Because of file dependencies, the most recent hotfix or feature that
	contains these files may also contain additional files.
	
	
	
	WORKAROUND
	==========
	
	To work around this problem, make sure to define an update schedule for the
	collection. To minimize the effects of the problem, do not update the collection
	by using the SMS Administrator console.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	To install the hotfix, use the appropriate method.
	
	Use the Hotfix Installer
	------------------------
	
	NOTE: This method is only for Intel-based computers.
	
	1. Copy the hotfix folder structure to a share on your network. The Q288567.exe
	  file is a a Microsoft SMS Installer file that updates specific files on your
	  site server.
	
	2. Log on to your site server by using an account with administrator
	  permissions.
	
	3. On the site server, quit the SMS Administrator console.
	
	4. Run Q288567.exe and follow the instructions in the wizard. You can run the
	  file in Quiet mode by using the /s switch.
	
	Manual Installation
	-------------------
	
	NOTE: This is a primary site server hotfix only.
	
	1. Stop the SMS Site Component Manager and SMS Executive services.
	
	2. Replace the Colleval.dll file in the
	  <Sms_root_folder>\Bin\<Platform> folder with the version from the
	  hotfix.
	
	3. Restart the SMS Site Component Manager and SMS Executive services.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbAdvertisement kbCollections 
	Technology        : kbSMSSearch kbSMS200SP2 kbSMS200SP3
	Version           : :2.0 SP2,2.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
