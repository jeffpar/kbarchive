---
layout: page
title: "Q213171: SMS: Unable to Schedule Software Metering Table Maintenance"
permalink: kb/213/Q213171/
---

## Q213171: SMS: Unable to Schedule Software Metering Table Maintenance

	Article: Q213171
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may notice that performance levels of the online Software Metering Service
	decrease occasionally.
	
	CAUSE
	=====
	
	The Software Metering Service (Remodbc.exe) performs maintenance on the database
	tables once a week by default. Software Metering Service database maintenance
	may experience problems if a table is open when maintenance is scheduled to
	occur.
	
	WORKAROUND
	==========
	
	To work around this problem, use one or both of the following procedures:
	
	Pack the Software Metering Tables Manually
	------------------------------------------
	
	1. Using the Systems Management Server 2.0 Administrators console, expand the
	  Tools folder for your site.
	
	2. Right-click SMS Service Manager, point to All Tasks, and then click "Start
	  SMS Service Manager".
	
	3. Click the plus sign (+) beside LICENSE_METERING.
	
	4. In the right pane, right-click LICENSE_METERING, and then click Query.
	
	5. Right-click LICENSE_METERING, and then click Stop.
	
	6. Once again, right-click LICENSE_METERING, and then click Query until the
	  service status reports "stopped."
	
	7. Use the steps above to also stop LICSVR_SERVICE.
	
	8. Stop the SMS_LICENSE_SERVER service on each software metering server.
	
	9. Navigate to the Software Metering folder (swmtr), which is located on each
	  software metering server.
	
	10. Double-click Vfp_pack.Exe.
	
	11. Wait for Vfp_pack.Exe to complete maintenance on the software metering
	  tables.
	
	12. You need to run Vfp_pack.exe on each software metering server in your site.
	
	13. Using the SMS Service Manager, right-click LICENSE_METERING, and then click
	  Start. Follow these same steps for the LICSVR_SERVICE.
	
	14. Start the SMS_LICENSE_SERVER service on each software metering server after
	  Vfp_pack has been run on each of them.
	
	Increase the Frequency of Software Metering Table Maintenance
	-------------------------------------------------------------
	
	1. Edit RemOdbc.Ini on the site server and in the Software Metering folder
	  (swmtr) on all software metering servers using any text editor.
	
	2. Insert the following key in the [DS] section
	
	  PackInterval=<seconds>
	
	  where <seconds> represents how often (in seconds) you want maintenance
	  performed on the software metering tables.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Systems Management Server 2.0.
	
	MORE INFORMATION
	================
	
	Increasing the frequency of software metering table maintenance may have adverse
	effects on system performance. Use this workaround with extreme caution.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
