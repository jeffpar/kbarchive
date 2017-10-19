---
layout: page
title: "Q129211: Frequently Asked Questions About Microsoft Exchange Profiles"
permalink: /kb/129/Q129211/
---

## Q129211: Frequently Asked Questions About Microsoft Exchange Profiles

	Article: Q129211
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95 msnetworkkbfaq
	Last Modified: 15-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Plus! for Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains frequently asked questions about Microsoft Exchange
	profiles in Windows 95.
	
	MORE INFORMATION
	================
	
	1. Q. What is a Microsoft Exchange profile?
	
	  A. A Microsoft Exchange profile consists of the services you choose to access
	  your mail provider(s), and provides personal address book storage and a
	  personal information store. By default, Windows 95 provides services for
	  Microsoft Mail, Microsoft Fax, The Microsoft Network Online Service,
	  CompuServe Mail, Personal Address Book, and Personal Information Store.
	  Microsoft Plus! for Windows 95 provides a service for Internet Mail.
	
	  NOTE: The CompuServe Mail information service is included in the CD-ROM
	  version of Windows 95, but not in the floppy disk version. To use the
	  CompuServe Mail information service, you must have the CD-ROM version of
	  Windows 95.
	
	
	2. Q. How do I set up a Microsoft Exchange profile?
	
	  A. To set up a profile, follow these steps:
	
	  1. Double-click the Mail And Fax icon in Control Panel.
	
	  2. If you have not set up a profile in Microsoft Exchange before, the Inbox
	     Setup Wizard starts automatically. Click the options you want to use in
	     your profile, and then click Next. Follow the instructions on the screen
	     to finish setting up your profile.
	
	     If you have set up a profile in Microsoft Exchange before, you can start
	     the Inbox Setup Wizard by clicking Show Profiles, and then clicking Add.
	     After the Inbox Setup Wizard has started, click the options you want to
	     use in your profile, and then click Next. Follow the instructions on the
	     screen to finish setting up your profile.
	
	3. Q. Can I have more than one Microsoft Exchange profile?
	
	  A. Yes. After you set up a profile, the Inbox Setup Wizard asks you for a name
	  for the profile. You can repeat the procedure to create as many profiles as
	  you want.
	
	4. Q. How do I switch between profiles, and how does Microsoft Exchange know
	  which profile to use if I have several?
	
	  A. To switch between profiles, double-click the Mail And Fax icon in Control
	  Panel, and then click Show Profiles. In the "When starting Microsoft
	  Exchange, use this profile" box, click the profile you want to use, and then
	  click Close. Then, start Microsoft Exchange.
	
	  If you have multiple profiles and you have not configured Microsoft Exchange
	  to prompt you for the profile to use each time you start Microsoft Exchange,
	  Microsoft Exchange uses the default profile defined in the Mail and Fax tool.
	  If multiple users are using one computer, Microsoft Exchange uses each user's
	  default profile.
	
	  To have Microsoft Exchange prompt you for the profile to use each time you
	  start Microsoft Exchange, follow these steps:
	
	  1. In Microsoft Exchange, click Options on the Tools menu.
	
	  2. In the "When starting Microsoft Exchange, use this profile" box, click
	     "Prompt for a profile to be used," and then click OK.
	
	  3. On the File menu, click Exit And Log Off.
	
	  4. Restart Microsoft Exchange.
	
	5. Q. How do I set up Microsoft Exchange profiles for multiple users on the same
	  computer?
	
	  A. When you shut down Windows 95, you have the option to log on as a different
	  user. Selecting this option lets you log on as another user and set up new
	  Microsoft Exchange profiles for that user. To do so, follow these steps:
	
	  1. Double-click the Passwords icon in Control Panel, and then click the User
	     Profiles tab.
	
	  2. Click "Users can customize their preferences...," and then click OK.
	
	  3. Have another user log on to Windows 95 and set up a profile. This profile
	     is used the next time the same user logs on and starts Microsoft Exchange.
	
	6. Q. When I create a profile, what is the profile's file name, and how is it
	  stored?
	
	  A. When you create a profile, the profile name and services are noted in the
	  registry. There is no file or file name for the profile. However, personal
	  address book (.pab) and personal information store (.pst) files are created
	  for the profile and stored on the hard disk.
	
	7. Q. Can I delete a profile?
	
	  A. Yes. To delete a profile, follow these steps:
	
	  1. Double-click the Mail And Fax icon in Control Panel.
	
	  2. Click Show Profiles.
	
	  3. Click the profile you want to remove, and then click Remove.
	
	  NOTE: This procedure removes the profile, but does not remove the personal
	  address book (.pab) and personal information store (.pst) files associated
	  with the profile.
	
	8. Q. If I have a profile that includes the The Microsoft Network Online Service
	  information service and the Internet Mail information service, and The
	  Microsoft Network is not my Internet service provider, how is Microsoft
	  Exchange able to communicate with both The Microsoft Network and my Internet
	  service provider?
	
	  A. Microsoft Exchange can be configured to connect to The Microsoft Network
	  and a different Internet service provider in the same profile, but not at the
	  same time. For example, if Microsoft Exchange has already connected to The
	  Microsoft Network to send and receive The Microsoft Network mail, it does not
	  attempt to connect to your Internet service provider to send and receive
	  Internet mail.
	
	9. Q. When I send mail, Microsoft Exchange uses fax first, and MSN, The
	  Microsoft Network, second. How can I configure Microsoft Exchange to use MSN
	  first?
	
	  A. You need to change the delivery sequence for the information services. To
	  do so, follow these steps:
	
	  1. Start Microsoft Exchange (Inbox).
	
	  2. On the Tools menu, click Options.
	
	  3. Click the Delivery tab.
	
	  4. In the "Recipient addresses are processed by these information services in
	     the following order" list, specify the order you want.
	
	  5. Click OK.
	
	Additional query words:
	
	======================================================================
	Keywords          : win95 msnetwork kbfaq
	Technology        : kbWin95search kbGamesSearch kbPlusSearch kbZNotKeyword3 kbPlus95
	Version           : :95
	
	=============================================================================
	
