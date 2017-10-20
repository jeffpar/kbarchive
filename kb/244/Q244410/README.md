---
layout: page
title: "Q244410: SMS: Smsapm32 Uses SMSCliToknAcct&amp; to Search Mapped Drives"
permalink: /kb/244/Q244410/
---

## Q244410: SMS: Smsapm32 Uses SMSCliToknAcct&amp; to Search Mapped Drives

{% raw %}

	Article: Q244410
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kbsms120 kbsms120bug
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If your path contains networked drives, Smsapm32 may access those networked
	drives using the local SMSCliToknAcct& account. This behavior may lock out
	the SMSCliToknAcct& domain if a domain account lockout policy is enabled. If
	domain auditing is enabled for unsuccessful logon and logoff, "Unknown Account"
	or "Password error" messages may be logged in Event Viewer for the domain.
	
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
	
	The English-language version of this fix should have the following file
	attributes or later:
	
	  Date      Time    Version          Size      File name    Platform
	  ------------------------------------------------------------------
	  10/14/99  07:58pm 2.00.1380.1055   232,288   Abnwcli.dll  i386
	  10/21/99  12:56pm 2.00.1380.1060   203,616   Bindcli9.dll i386
	  10/21/99  12:56pm 2.00.1380.1060   259,936   Bindclin.dll i386
	  10/21/99  12:53pm 2.00.1380.1060   257,376   Bindsvrn.dll i386
	  11/10/99  09:42pm 2.00.1380.1072   160,080   Ccim32.dll   i386
	  11/03/99  08:16pm                1,327,679   Ccmcore.exe  i386
	  11/10/99  09:46pm                3,632,822   Clicore.exe  i386
	  11/03/99  08:01pm 2.00.1380.1063    70,000   Clisvc95.exe i386
	  11/03/99  08:01pm 2.00.1380.1063    76,656   Clisvcl.exe  i386
	  11/03/99  08:11pm                  268,753   Cliunins.exe i386
	  10/01/99  01:22pm 2.00.1380.1051   157,536   Falclin.dll  i386
	  11/03/99  08:01pm 2.00.1380.1063    66,928   Launch32.exe i386
	  10/27/99  05:33pm 2.00.1380.1063   203,104   Mslmcli9.dll i386
	  10/27/99  05:33pm 2.00.1380.1063   335,712   Mslmclin.dll i386
	  10/27/99  05:33pm 2.00.1380.1063   333,664   Mslmsvrn.dll i386
	  10/21/99  12:56pm 2.00.1380.1060   208,224   Ndscli9.dll  i386
	  10/21/99  12:56pm 2.00.1380.1060   269,664   Ndsclin.dll  i386
	  10/21/99  12:54pm 2.00.1380.1060   267,104   Ndssvrn.dll  i386
	  10/27/99  06:05pm 2.00.1380.1063    44,400   Odpusr32.exe i386
	  3/1/2000  07:24pm 2.00.1380.1139  210,288    Smsapm32.exe I386
	  11/03/99  07:59pm 2.00.1380.1063   291,856   Smsclreg.dll i386
	  10/27/99  06:11pm                  623,615   Swdist32.exe i386
	  10/27/99  02:50pm                3,826,417   Wbemsdk.exe  i386
	  10/14/99  07:59pm 2.00.1380.1055   409,360   Abnwcli.dll  Alpha 
	  11/10/99  09:42pm 2.00.1380.1072   255,760   Ccim32.dll   Alpha
	  11/03/99  08:15pm                1,934,970   Ccmcore.exe  Alpha
	  11/10/99  09:47pm                4,806,577   Clicore.exe  Alpha
	  11/03/99  08:00pm 2.00.1380.1063   100,624   Clisvc95.exe Alpha
	  11/03/99  08:00pm 2.00.1380.1063   110,352   Clisvcl.exe  Alpha
	  11/03/99  08:12pm                  465,812   Cliunins.exe Alpha
	  10/01/99  01:22pm 2.00.1380.1051   285,968   Falclin.dll  Alpha
	  11/03/99  08:00pm 2.00.1380.1063    97,040   Launch32.exe Alpha
	  10/27/99  05:33pm 2.00.1380.1063   575,760   Mslmclin.dll Alpha
	  10/27/99  05:33pm 2.00.1380.1063   572,176   Mslmsvrn.dll Alpha
	  10/27/99  06:06pm 2.00.1380.1063    65,808   Odpusr32.exe Alpha
	  3/1/2000  07:24pm 2.00.1380.1139  280,848    Smsapm32.exe Alpha
	  11/03/99  08:00pm 2.00.1380.1063   550,672   Smsclreg.dll Alpha
	  10/27/99  06:11pm                  679,857   Swdist32.exe Alpha
	  10/27/99  02:52pm                7,100,159   Wbemsdk.exe  Alpha
	  11/10/99  09:35pm 2.00.1380.1072        67   Compver.ini
	  11/11/99  06:23pm 2.00.1380.2004        67   Compver2.ini
	
	NOTE: Due to file dependencies, the most recent hotfix or feature that contains
	the above files may also contain additional files.
	
	
	
	WORKAROUND
	==========
	
	To workaround this problem, remove all networked drives from the path.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	MORE INFORMATION
	================
	
	To install the hotfix, use the appropriate method on the Systems Management
	Server site server.
	
	Before you implement this update, Microsoft recommends that you also apply the
	following hotfix:
	
	  Q232653 SMSCliToknAcct& Locked Out When Hardware Inventory Is Enabled
	
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q231399 SMSCliToknAcct& and/or SMSCliSvcAcct Accounts Locked Out
	
	Method 1: Using the Hotfix Installer
	------------------------------------
	
	NOTE: You can use this method only on i386-based computers.
	
	1. Copy the hotfix folder structure to a share on your network (for example, the
	  Q244410.exe file is located in a root folder with i386 and Alpha subfolders).
	  Q244410.exe is a Microsoft Windows Installer file that updates specific files
	  on your site server.
	
	2. Log on to your site server using an account with administrative privileges.
	
	3. Run Q244410.exe and follow the directions in the wizard. You can run the file
	  in Quiet mode using the /s switch.
	
	4. If your SMS Client Base Component version is in the 2000 range (for example,
	  2.00.1380.20XX), you must manually reset the component version in the
	  <Sms_root_folder>\Inboxes\Clicomp.src\Base\Compver.ini file after all
	  clients in your site have been updated (for example, change from
	  2.00.1380.2004 to 2.00.1380.1072).
	
	Method 2: Manual Installation
	-----------------------------
	
	1. Stop all Systems Management Server services.
	
	2. Replace the Abnwcli.dll file in the
	  <Sms_root_folder>\Bin\<Platform> folder with the version obtained
	  from the hotfix.
	
	3. Replace the Ccim32.dll file in the
	  <Sms_root_folder>\Bin\<Platform> folder with the version obtained
	  from the hotfix.
	
	4. Replace the Clisvcl.exe file in the
	  <Sms_root_folder>\Bin\<Platform> folder with the version obtained
	  from the hotfix.
	
	5. Replace the Falclin.dll file in the
	  <Sms_root_folder>\Bin\<Platform> folder with the version obtained
	  from the hotfix.
	
	6. Replace the Mslmclin.dll file in the
	  <Sms_root_folder>\Bin\<Platform> folder with the version obtained
	  from the hotfix.
	
	7. Replace the Mslmsvrn.dll file in the
	  <Sms_root_folder>\Bin\<Platform> folder with the version obtained
	  from the hotfix.
	
	8. Replace the Odpusr32.exe file in the
	  <Sms_root_folder>\Bin\<Platform> folder with the version obtained
	  from the hotfix.
	
	9. Replace the Bindsvrn.dll file in the <Sms_root_folder>\Bin\i386 folder
	  with the version obtained from the hotfix.
	
	10. Replace the Ccmcore.exe file in the
	  <Sms_root_folder>\Inboxes\Clicomp.src\base\<Platform> folder
	  with the version obtained from the hotfix.
	
	11. Replace the Clicore.exe file in the
	  <Sms_root_folder>\Inboxes\Clicomp.src\base\<Platform> folder
	  with the version obtained from the hotfix.
	
	12. Replace the Wbemsdk.exe file in the
	  <Sms_root_folder>\Inboxes\Clicomp.src\Wbem\<Platform> folder
	  with the version obtained from the hotfix.
	
	13. Replace the Swdist32.exe file in the
	  <Sms_root_folder>\Inboxes\Clicomp.src\Swdist\<Platform> folder
	  with the version obtained from the hotfix.
	
	14. Replace the Compver.ini file in the
	  <Sms_root_folder>\Inboxes\Clicomp.src\Wbem folder with the version
	  obtained from the hotfix.
	
	15. Replace the Compver.ini file in the
	  <Sms_root_folder>\Inboxes\Clicomp.src\Swdist folder with the version
	  obtained from the hotfix.
	
	16. If your current SMS Client Base Component version is in the 1000 range (for
	  example, 2.00.1380.10XX), replace the Compver.ini file in the
	  <Sms_root_folder>\Inboxes\Clicomp.src\base folder with the version
	  obtained from the hotfix.
	
	17. If your current SMS Client Base Component version is in the 2000 range (for
	  example, 2.00.1380.20XX), replace the Compver.ini file in the
	  <Sms_root_folder>\Inboxes\Clicomp.src\base folder with the
	  Compver2.ini file obtained from the hotfix. Note that you must rename the
	  Compver2.ini file to Compver.ini. After all of the clients in your site have
	  been updated, you must manually reset the component version in the
	  Compver.ini file (for example, change from 2.00.1380.2004 to
	  2.00.1380.1072).
	
	18. Restart all Systems Management Server services.
	
	Additional query words: prodsms smsapm clitokn
	
	======================================================================
	Keywords          : kbsms120 kbsms120bug 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : winnt:2.0,2.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
