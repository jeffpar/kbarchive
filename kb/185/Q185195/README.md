---
layout: page
title: "Q185195: How to Use Key and Certificate Backup/Restore Utility"
permalink: /kb/185/Q185195/
---

## Q185195: How to Use Key and Certificate Backup/Restore Utility

	Article: Q185195
	Product(s): Internet Information Server
	Version(s): 1.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	- Microsoft Certificate Server version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This document describes how to use the key and certificate backup/restore
	utility to protect keys and certificates for Microsoft Certificate Server.
	
	MORE INFORMATION
	================
	
	This utility applies specifically to the keys and certificates issued by
	Certificate Server. This utility is not designed to back up or restore
	certificates issued to other Certificate Authorities (CAs). This utility does
	not apply to log and database files used by Microsoft Certificate Server.
	
	Mechanics
	---------
	
	The existing certutil command-line utility has been enhanced to include backup
	and restore options.
	
	The syntax is as follows:
	
	  certutil -backup <password> <filename>
	
	  certutil -restore <password> <filename>
	
	The value for <password> is used to secure the <filename>. Using the
	password and file name on the Restore option allows an encrypted file containing
	keys and certificates to be restored. The file contains the Certificate
	Authority's private key and certificate encrypted using PFX (PKCS #12). PKCS #12
	is a part of the Public Key Cryptography Standards (PKCS) series from RSA Data
	Security, Inc. It is a standard for securely exporting and importing private
	material, including private keys.
	
	For additional information about RSA Data Security, please see the following Web
	page:
	
	  http://www.rsa.com
	
	Example 1
	---------
	
	The following example demonstrates how the keys and certificates are saved to
	C:\Backup\Certfile:
	
	     C:\>Certutil -backup Pswd C:\Backup\Certfile
	
	In this example, the password is Pswd, and the file containing the encrypted keys
	and certificates is named Certfile in the directory C:\Backup. To restore the
	same keys and certificates, use the following:
	
	     C:\>Certutil -restore Pswd C:\Backup\Certfile
	
	Example 2
	---------
	
	In this example, the keys and certificates for an existing Certificate Server
	application are backed up from a first computer and restored to a second
	computer.
	
	NOTE: Windows NT Service Pack 6a must be installed on the original Certificate
	Server before you attempt this. This step is necessary to install the updated
	version of Certutil.exe.
	
	1. The administrator enters the backup command from the first computer. The
	  following command backs up the keys and certificates for CA_YOURCANAME to
	  c:\backup\yourcertfile:
	
	        C:\>Certutil -backup yourpswd c:\backup\yourcertfile
	   
	
	  NOTE: Be sure to choose your own password and backup file name.
	
	2. Copy the backup file to the other computer.
	
	3. The receiving computer must be readied to receive the CAs keys and
	  certificates. Installation of the Windows NT Option Pack is a prerequisite. A
	  Typical installation is recommended, but all that is necessary is to ensure
	  that Certificate Server is not installed from the original Windows NT Option
	  Pack CD or download location. Instead, an updated version of Microsoft
	  Certificate Server is available on the purchased Windows NT Server Service
	  Pack 6a CD. Alternatively, the updated files are available on the Web at the
	  following Microsoft Web site:
	
	  ftp://ftp.microsoft.com/bussys/iis/iis-public/fixes/usa/certserv/
	
	  Note that the updated version of Certificate Server is necessary to allow the
	  restore certificate functionality on the new certificate server.
	
	To install the Certificate Server QFE after downloading the files, follow the
	directions outlined in the following Microsoft Knowledge Base article:
	
	  Q184695 Readme Notes for Certificate Server Update
	
	4. Make sure that the values used in the Setup dialog boxes for the newly
	  installed Certificate Server computer are exactly the same as those for the
	  Certificate Server computer from which the keys and certificates were
	  obtained. This applies to the dialog box on which identifying information is
	  entered, and the dialog box on which the Advanced Configuration is specified.
	
	5. Restore the keys and certificates:
	
	         C:\>certutil -restore yourpswd a:\yourcertfile
	   
	
	6. Restore keys and certificates for CA_YOURCANAME from a:\certfile.
	  CA_YOURCANAME in this example is also the name of the CA on the new
	  Certificate Server computer that will eventually receive these keys and
	  certificates.
	
	7. Move the existing certificate files created during initial installation of
	  Certificate Server out of the shared folder, so that no certificate files
	  exist in the shared folder. For example, if the new computer to which the CA
	  is to be restored is named M2, then the certificate files would be named
	  M2_YOURCANAME.crt and M2_YOURCANAME_Exchange.crt.
	
	8. Uninstall and reinstall Certificate Server. Do this using QFE distribution
	  files and the command-line install utility. In the following example, the QFE
	  files for Certificate Server are stored in the directory C:\certqfe:
	
	        C:\>CD C:\Certqfe
	
	        C:\>SYSOCMGR /i:Certmast.inf /n
	
	  This starts the Setup utility for uninstall. When the Select Components dialog
	  box is displayed, the Certificate Server check box will be selected. Clear it
	  and click Next. After the installation is complete, reinstall Certificate
	  Server, this time using the restored keys and certificates.
	
	        C:\>CD C:\Certqfe
	
	        C:\>SYSOCMGR /i:Certmast.inf /n
	
	9. When the Select Components dialog box appears, the Certificate Server check
	  box is not selected. Select it, and then click Next.
	
	10. In the first Microsoft Certificate Server Setup dialog box, type the name of
	  the shared folder on the new computer (and where you previously copied the
	  certificate files). Also, check the Show Advanced Configuration check box.
	  Click Next.
	
	11. In the second Microsoft Certificate Server Setup dialog box, select the Use
	  Existing Keys check box. Select the entry in the list box corresponding to
	  your CA name. Click Next.
	
	12. In the third Microsoft Certificate Server Setup dialog box, type a
	  description.
	
	  NOTE: The only configuration choice available in this step is the CA
	  description.
	
	  After you enter a description, click Next.
	
	13. At the end of Setup, the certificate service is stopped. Before you start
	  the service, manually copy over the Certificate Server database from the
	  original Certificate Server and overwrite the Certificate Server database
	  that was created during installation. By default, the location of the file
	  is %Winnt%\System32\CertLog\Certsrv.mdb. Note that you should stop the
	  service on the original computer before you attempt this. After the updated
	  database in in place, reapply Windows NT Service Pack 6a to the machine and
	  then reboot.
	
	If the certificate service does not start after the reboot, see the following
	Knowledge Base articles:
	
	  Q241060 Error Message: The Certificate Server Did Not Start: Unable to
	  Initialize the Database Connection
	
	  Q217339 Certificate Server Fails to Start with Event ID 7000 or 7009
	
	NOTE: Installing Certificate Server is necessary to obtain Certutil.exe, and
	Certutil.exe is necessary to restore backup keys; therefore, you must install a
	temporary Certificate Server to restore the keys to a new computer's registry.
	After you restore the backup keys, uninstall and reinstall to reuse the restored
	keys. Also, the new certificate server does not have to have the same NetBIOS
	computer name as the original Certificate Server. If the NetBIOS name is changed
	to a different name, remember to update the name resolution method used (for
	example, DNS or WINS) accordingly so that clients can still connect to the
	server.
	After you complete the above steps, your restored CA is now available. To use the
	CA in Internet Information Server, make sure the World Wide Web Publishing
	Service is also started.
	
	Service Pack 4 Enhancements:
	
	certutil -backup
	This command backs up the CA private and public keys for the signing and exchange
	certificates from the CA_CAName cert store and the CAName HKEY_LOCAL_MACHINE key
	container, as well as the certificates themselves, into a PFX file.
	
	certutil -restore
	This command restores the keys and certificates from a PFX file into the registry
	into the CA_CAName cert store and the CAName HKEY_LOCAL_MACHINE key container.
	
	This allows the backup of the keys, which was not supported in the initial
	release of the Windows NT Option Pack. With the advent of Service Pack 4, if a
	server fails, a new server can be installed with the same computer name. The old
	CA keys can be restored onto the new computer, and the Certificate Server
	reinstalled, using the Advance dialog during the installation to reuse the keys
	and certificates. After installation, use Certutil.exe to accomplish backup and
	restore of the Certificate Server's database file, and the Certificate Server's
	configuration is restored.
	
	NOTE: Installing Certificate Server is necessary to obtain Certutil.exe , and
	Certutil.exe is necessary to restore backup keys; therefore, you must install a
	temporary Certificate Server to restore the keys to a new computer's registry.
	After you restore the backup keys, uninstall and reinstall to reuse the restored
	keys.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400 kbCertServSearch kbZNotKeyword3 kbCertServ100
	Version           : :1.0,4.0
	Issue type        : kbhowto
	
	=============================================================================
	
