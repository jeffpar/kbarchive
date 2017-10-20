---
layout: page
title: "Q259282: XADM: How to Remove Accounts with Invalid Characters"
permalink: /kb/259/Q259282/
---

## Q259282: XADM: How to Remove Accounts with Invalid Characters

{% raw %}

	Article: Q259282
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): kberrmsg kbtool exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In some situations, an invalid object is placed in the directory through a
	third-party program or a Lightweight Directory Access Protocol (LDAP) import.
	You cannot modify or delete the object using the Exchange Server Administration
	program, and you cannot delete the object in raw mode. In addition, the
	following error message is displayed:
	
	  The object cannot be found in the directory. This may be because replication
	  has not completed. c1010aae
	
	MORE INFORMATION
	================
	
	To remove the affected mailboxes, use the following procedure.
	
	NOTE: Two versions of LDP.EXE are available, one for Exchange Server 5.5
	directory and one for Microsoft Windows 2000 Active Directory. The LDP.exe file
	can be found on the 2000 Server CDROM in the CD:\support\tools directory. Run
	2000RKST.MSI to install. The Exchange version is found on the Exchange 5.5
	Resource Kit.
	
	During this procedure, you will need to obtain both versions. Rename the Exchange
	5.5 version of the file to "LDP1.EXE" (without the quotes). Use Ldp1.exe for all
	operations involving the Exchange Server 5.5 directory, and Ldp.exe when working
	with the Windows 2000 Active Directory.
	
	WARNING: Ldp1.exe and Ldp.exe are LDAP programs that expose the directory in raw
	mode. Care should be taken when using these tools.
	
	Step 1: Find the Directory Name of the Affected Mailbox
	-------------------------------------------------------
	
	1. Run a Directory Export of the Recipients container where the mailbox(es)
	  exist.
	
	2. Open the .csv file that is created.
	
	3. Find the Directory Name header, and identify the directory name for the
	  mailbox(es) you want to remove.
	
	4. Copy the DN string that is listed into Notepad.
	
	Step 2: Modify the Directory Name so You Can Use it in LDP
	----------------------------------------------------------
	
	1. Type "cn=" (without the quotation marks) before the directory name and add a
	  comma (,) after it.
	
	2. After the comma, type "cn=Recipients,ou=Site,o=Org" (without the quotation
	  marks) (the cn= parameter may be different, depending on which container the
	  account exists in), as shown in the following example:
	
	  cn=UserName?,cn=Recipients,ou=Site,o=Org
	
	NOTE: The question mark (?) remains after UserName, because it is the invalid
	character and is the reason for this deletion. The entry is ready for use in
	Ldp1.exe.
	
	Step 3: Remove the Mailbox
	--------------------------
	
	1. Run Ldp1.exe.
	
	2. On the Connection menu, click Connect.
	
	3. When you are prompted for a server name, type the name of the Exchange Server
	  computer where the mailbox resides. Verify that the port is 389, and make
	  sure the Connectionless check box is cleared.
	
	  NOTE: Port 389 is the default LDAP port. This port may have changed for
	  technical reasons, so please verify this with your system administrator.
	
	4. Click OK. You should see that a connection is established.
	
	5. On the Connection menu, click Bind.
	
	6. Type a user name that has administrative rights to the Exchange Server
	  computer, and then type the password for the user.
	
	7. Click to select the check box next to Domain, type the domain name for the
	  account, and then click OK. The following message should be displayed at the
	  bottom of the LDP screen:
	
	  Authenticated as dn:<username>
	
	8. On the Browse menu, click Delete.
	
	9. Cut and paste the entry you created in Notepad into the DN field in the
	  Delete dialog box, and then click OK. You should see a message confirming the
	  deletion at the bottom of the LDP screen.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbtool exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
