---
layout: page
title: "Q295067: XCCC:  Troubleshooting passwords in Outlook Web Access"
permalink: /kb/295/Q295067/
---

## Q295067: XCCC:  Troubleshooting passwords in Outlook Web Access

{% raw %}

	Article: Q295067
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how troubleshoot Microsoft Outlook Web Access (OWA) when
	you receive the following error message:
	
	  Your current password is about to expire in 0 days
	
	Although this article uses the USA Outlook Web Access directory, this also
	applies to other language sets as well. For example, if you are using Japanese
	(JPN) Outlook character sets, you would access the c:\exchsrvr\webdata\JPN
	directory to edit the root.asp file for the Japanese OWA language.
	
	MORE INFORMATION
	================
	
	When you log on to an Exchange Server 5.5 computer by using OWA, you may receive
	the following error message:
	
	  Your current password is about to expire in 0 days
	
	This error message can occur in the following scenarios:
	
	- Scenario one: Your Windows NT account password on the domain controller has
	  expired.
	
	- Scenario two: A user was logged on to OWA when Exchange Server 5.5 Service
	  Pack 3 (SP3) was installed on the Exchange Server computer.
	
	- Scenario three: Your account is located on the local account database of a
	  member server and not the domain controller.
	
	- Scenario four: A corrupted or invalid IUSR_servername account is used.
	
	Resolution for Scenario One
	---------------------------
	
	If your Windows NT account password has expired:
	
	1. Log on to the OWA client, and then click OK when you receive this error
	  message.
	
	2. Click the Options icon on the Outlook bar, and then click Change Password.
	
	3. Type the appropriate information in the Account Name, Old Password, New
	  Password, and Confirm New Password boxes.
	
	4. Click OK to confirm your choices.
	
	Resolution for Scenario Two
	---------------------------
	
	If a user was logged on to OWA when Exchange Server 5.5 SP3 was installed on the
	Exchange Server computer, use either of the following methods to resolve this
	issue:
	
	- Reset the password in User Manager for any users experiencing this issue.
	
	  NOTE: This issue only occurs for users who were logged on at the time the
	  Exchange Server 5.5 SP3 upgrade was applied to the Exchange Server computer.
	
	- Edit the Constant.inc file that is located in the
	  Exchsrvr\WebData\<Language> folder. In the line that reads
	  "fEnablePasswordMenu = true," change "true" to "false" to disable the error
	  message.
	
	  NOTE If you use this method, none of the users can change their passwords by
	  using the Option menu in OWA.
	
	Resolution for Scenario Three
	-----------------------------
	
	If your account is located in a local account database of a member server and not
	the domain controller, disable the Change Password option on the Windows NT
	member server by editing the Constant.inc file that is located in the
	Exchsrvr\WebData\USA folder. To do so:
	
	1. Use Microsoft Notepad to open Constant.inc.
	
	2. Under Administrative Settings, locate the following line:
	
	fEnablePasswordMenu = true
	
	3. Change this entry to read:
	
	fEnablePasswordMenu = false
	
	4. On the File menu, click Save.
	
	5. On the File menu, click Exit.
	
	Resolution for Scenario Four
	----------------------------
	
	If a corrupted or invalid IUSR_servername account is being used, use either of
	the following methods to resolve this issue:
	
	- Change the password for the IUSR_<computername> account in the Windows
	  NT User Manager for Domains tool, and then retype this new password in all
	  the locations that reference this account and password.
	
	  -or-
	
	- Create a new account to be used in place of the existing
	  IUSR_<computername> account. Make sure that you create an account that
	  has all of the same rights and permissions, and that is part of the same
	  groups as the existing account. Verify that all other references to this
	  account are updated with the new account information.
	
	Use User Manager for Domains to check the following locations after you change a
	password or create a new account:
	
	- Internet Information Server (IIS):
	
	  1. Start Internet Service Manager.
	
	  2. Click to expand Internet Information Server, and then open the properties
	     of the server in question.
	
	  3. Click Edit in the Master Properties section.
	
	  4. Click the Directory Security tab.
	
	  5. Click Edit in the "Anonymous Access and Authentication Control" section.
	
	  6. Click Edit in the Allow Anonymous Access section.
	
	  7. Update the user account and password.
	
	     NOTE: You may have to clear the Enable Automatic Password Synchronization
	     check box to update the password. If you do so, make sure to enable it
	     again before you exit the dialog box.
	
	  8. Click OK four times to exit all dialog boxes.
	
	- Exchange Server:
	
	  1. Start the Microsoft Exchange Server Administrator program.
	
	  2. Click to expand the Configuration container, and then open the DS Site
	     Configuration properties.
	
	  3. Click the General tab, update the user account and password, and then
	     click OK.
	
	Alternatively, you can use the following resolution:
	
	1. Go to C:\Exchsrvr\Webdata\USA.
	
	2. Open the Root.asp file.
	
	3. Look for the line that contains the following data:
	
	  if cint(days) < 0 then days = 10000.
	
	4. Change this line so that it includes the following data:
	
	  if cint(days) < 1 then days = 10000.
	
	5. Save the file.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
