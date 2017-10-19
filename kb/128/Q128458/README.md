---
layout: page
title: "Q128458: SMS Despooler Does Not Support Forced Installation and Upgrade"
permalink: /kb/128/Q128458/
---

## Q128458: SMS Despooler Does Not Support Forced Installation and Upgrade

	Article: Q128458
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbDespooler smsdespooler
	Last Modified: 02-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOM
	-------
	
	The Systems Management Server Despooler does not support forced
	installation and upgrade of package directories on Windows NT distribution
	servers.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1. This problem has been corrected in Systems Management Server
	version 1.2.
	
	MORE INFORMATION
	================
	
	
	The Systems Management Server Despooler now supports forced installation and
	upgrade of package directories on Windows NT distribution servers.
	
	At each Systems Management Server site, the Systems Management Server Despooler
	installs and updates package directories on distribution servers that are
	specified in the Distribution Phase of Run Command On Workstation and Share
	Package On Server jobs. When a package is distributed using these types of jobs,
	the Despooler installs the files for the package on a shared directory on each
	distribution server specified by the job. If the some or all of the files
	already exist in the package directory (that is, the files were installed by the
	Despooler during a previous job or the files simply already existed in the
	shared directory), the Despooler attempts to update those files.
	
	In Systems Management Server 1.0 and 1.1, the Systems Management Server Despooler
	copied each file in the package to the package directory on each distribution
	server. If any of the files within the package directory were locked by a user
	accessing the file, the Despooler would stop the file copying process at that
	particular file and then retry at a set time interval for a set number of
	retries. In this case, the package directory would contain some files that have
	been updated but the locked file would block the rest of the files from being
	updated. If one or more files continued to be locked when the Despooler reached
	the retry limit, then the package directory would not be updated completely and
	the Despooler would report the servers installation status as failed. Even if
	the package directory was successfully updated over time, this delay may be
	unacceptable.
	
	With Systems Management Server 1.2, you can enable forced delivery of the package
	files on Windows NT distribution servers--even if one or more files in the
	package directory are locked. You enable this feature through the Windows NT
	registry of the site server. By default, this feature is disabled.
	
	If the forced delivery feature is enabled, the Despooler checks for any open
	files in the package directory (as well as any subdirectories within the package
	directory) on the distribution server. If one or more files are open, the
	Despooler determines whether it should force the installation of the package
	files--based on the Number of Retries Before Forced Disconnection entry in the
	registry. If the count of retries is less than the Number of Retries Before
	Forced Disconnection entry, the Despooler waits for the time specified by the
	retry interval (retry interval is 24 times the Despooler polling interval).
	
	If the Despooler detects that current count of retries has exceeded the Number of
	Retries Before Forced Disconnection entry in the registry, the Despooler revokes
	access to the package directory from all users except the Systems Management
	Server service account (this allows current users who are connected to maintain
	access but prevents new users from connecting to the package directory) and
	sends a a disconnection warning message to all users who have files open in the
	package directory.
	
	This message tells the user that they should close all applications running from
	the package directory and close all files open on the package directory and that
	Systems Management Server will close access to the package directory after the
	length time specified in the Forced Disconnection Delay In Minutes entry. After
	the Forced Disconnection Delay In Minutes time has elapsed, the Despooler closes
	the package directory for all users who still have files open. The Despooler
	then copies the package files and restores access to the package directory.
	Finally, the Despooler sends a message to the users who were previously sent the
	disconnection warning message. This message informs the users that the package
	directory is ready for access again.
	
	The following rules apply to the forced delivery setting:
	
	- Settings for forced delivery apply only to the sites whose site server
	  registries you have configured for forced delivery. For example, if you have
	  five sites and you want to enable forced delivery on each site, you must set
	  the forced delivery settings in the registry of the site servers in each of
	  the five sites.
	
	- Settings for forced delivery apply to target sites (that is, sites that
	  receive the package). For example, if you created a job at Site A to
	  distribute a package to Site B and Site A had forced delivery enabled and
	  Site B did not, forced delivery would have no effect on that job. However, if
	  you created the same job and Site A did not have forced delivery enabled and
	  Site B did, forced delivery would be effect in effect on that job.
	
	- Settings for forced delivery apply to all Run Command On Workstation and
	  Share Package On Server jobs at target sites where forced delivery is
	  enabled. Forced delivery does not affect Remove Package From Server jobs or
	  System jobs.
	
	To set forced delivery:
	
	1. At the site server of the site where you want to set forced delivery, start
	  the Windows NT Registry Editor.
	
	2. Open the following key under the HKEY_LOCAL_MACHINE subtree:
	
	     \SOFTWARE\Microsoft\SMS\Components\SMS_Despooler
	
	3. Turn on forced delivery by setting Use Forced Disconnect to 1.
	
	  Use Forced Disconnect enables you to turn forced delivery on or off for the
	  site. Note that 0 (zero) is off and 1 (or any other non-zero value) is on.
	
	4. Set the number of retries after which the Despooler forces the package
	  delivery by setting Number Of Retries Before Forced Disconnection.
	
	  Number Of Retries Before Forced Disconnection enables you to specify the
	  number of times after which the Despooler will force user to disconnect from
	  the package directory and then update the package files. This value specifies
	  the number of retries. The default is 12.
	
	5. Set the number of minutes after which the Despooler forces all users to
	  disconnect from the package directory by setting Forced Disconnection Delay
	  In Minutes.
	
	  Forced Disconnection Delay In Minutes enables you to specify the number of
	  minutes after which the Despooler will force all users to disconnect from the
	  package directory. The default is 5.
	
	6. To force the Despooler to use the new settings, use the Systems Management
	  Server Service Manager to pause and continue the SMS_DESPOOLER component.
	
	Calculating the Forced Delivery Time
	------------------------------------
	
	Use the following formula to calculate how much time will elapse after the first
	failed attempt to update a package directory on a distribution server:
	
	  ForceDeliveryTime = (x * (y + 1))+ z
	  x = Despooler Retry Interval
	  y = Number Of Retries Before Forced Disconnection
	  z = Forced Disconnection Delay In Minutes
	
	Note that Despooler Retry Interval is based on the Response setting for the
	services at the site:
	
	  Response     Retry Interval(Minutes)
	  ------------------------------------
	  Very Fast     24
	  Fast         120
	  Medium       360
	  Slow         720
	
	For Example, suppose your site was running at Fast Response mode and you made the
	following settings:
	
	  Use Forced Disconnect equal to 1.
	  Number Of Retries Before Forced Disconnection equal to 10.
	  Forced Disconnection Delay In Minutes equal to 5.
	
	This means that after the Despooler retries updating a package 10 times, it sends
	a message to users with open files on the package directory. After 5 minutes,
	the Despooler disconnects all users and updates the package. The total time
	elapsed from the first attempt to update the package is approximately 22 hours
	and 5 minutes. 22 hours and 5 minutes = (120 minutes * (10 retries + 1)) + 5
	minutes.
	
	Additional query words: prodsms sms
	
	======================================================================
	Keywords          : kbnetwork kbDespooler smsdespooler 
	Technology        : kbSMSSearch kbSMS110
	Version           : winnt:1.1
	
	=============================================================================
	
