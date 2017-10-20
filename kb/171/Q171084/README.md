---
layout: page
title: "Q171084: How to Install a Certificate"
permalink: /kb/171/Q171084/
---

## Q171084: How to Install a Certificate

{% raw %}

	Article: Q171084
	Product(s): Internet Information Server
	Version(s): WinNT:2.0,3.0
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 29-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following are the steps to successfully install a Certificate using Key
	Manager with Internet Information Server (IIS).
	
	MORE INFORMATION
	================
	
	1. Generate a Key Pair File and a Request File.
	
	  a. In the Microsoft Internet Server, click Key Manager, or click the Key
	     Manager icon on the Internet Service Manager toolbar.
	
	  b. From the Key menu, click Create New Key.
	
	  c. In the Create New Key and Certificate Request dialog box, fill in the
	     requested information.
	
	  d. After you fill out the form, click OK.
	
	  e. When you are prompted, retype the password you typed in the form, and
	     click OK.
	
	  f. An icon appears as the key is being created. When the key has been
	     created, a screen appears giving you information about the new keys and
	     how to obtain a certificate.
	
	  g. After you read the New Key Information screen, click OK.
	
	  h. From the Key menu in Key Manager, choose Export Key and then Backup File.
	     Click OK to the warning dialog on your hard disk. Type the key name in the
	     File Name box, and click Save.
	
	     NOTE: Backing up the Key is very important.
	
	  i. To save the new key from the Servers menu, select Commit Changes Now. When
	     asked if you want to commit all changes now, click OK.
	
	2. Request a Certificate from a Certification Authority.
	
	  To get a Secure Sockets Layer (SSL) Server ID, complete the Online Enrollment
	  Form at the following location:
	
	  http://www.verisign.com for a SSL Server ID
	
	3. Install the Certificate on your Server.
	
	  a. In the Internet Server program group, click Key Manager.
	
	  b. In the Key Manager window, select the key pair that matches your signed
	     certificate.
	
	     If you backed up the key pair file, you have to load it first. To load a
	     backed-up key file, click Key Manager on the Key menu, select Import Key
	     and then Backup File.
	
	  c. Select the file name from the list, and click Open.
	
	  d. From the Key menu, choose Install Key Certificate.
	
	  e. Select the Certificate file from the list (for example, Certif.txt), and
	     click Open.
	
	  f. When you are prompted, type the password that you used in creating the key
	     pair. The key and certificate are combined and stored in the registry of
	     the server.
	
	  g. Click Commit Changes Now on the Servers menu.
	
	  h. When you are asked if you want to Commit All Changes Now, click OK.
	
	Sending them via mail can corrupt certificates. If you try and install a corrupt
	certificate, you will get a wrong password error message. You will no longer be
	able to install the certificate for that key, even if you get a non-corrupt
	copy.
	
	To uncorrupt the certificate:
	
	1. Load the certificate in Notepad.
	
	2. No spaces can exist anywhere in the certificate.
	
	3. Save it without an extension by selecting the All Files as type. Do not check
	  the unicode box.
	
	4. Once you have fixed your certificate, you must delete the key and re-import
	  it. Make sure you have saved it first.
	
	  To import the key, click Import on the Key menu, then select Backup file.
	
	Additional query words: iis
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbiisSearch kbiis300 kbiis200
	Version           : WinNT:2.0,3.0
	Hardware          : ALPHA x86
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
