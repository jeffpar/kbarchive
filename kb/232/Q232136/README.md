---
layout: page
title: "Q232136: How to Back Up a Server Certificate in IIS 5.0"
permalink: kb/232/Q232136/
---

## Q232136: How to Back Up a Server Certificate in IIS 5.0

	Article: Q232136
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbAudITPro kbHOWTOmaster
	Last Modified: 05-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	
	IN THIS TASK
	------------
	
	- SUMMARY
	
	   - Create an MMC Snap-in for Managing Certificates
	- Export a Certificate and Public Key
	- Troubleshooting
	
	- REFERENCES
	
	SUMMARY
	=======
	
	When you use Internet Information Services (IIS) 5.0, you may want to back up
	your server certificate(s). Windows 2000 makes this process easy using the new
	Certificates snap-in.
	
	Create an MMC Snap-in for Managing Certificates
	-----------------------------------------------
	
	In order to perform the backup, you must first create a new MMC and add the
	Certificates snap-in. You can also add the snap-in to another MMC as long as it
	is opened in Author mode.
	
	Use the following steps to create a new MMC and add the Certificates snap-in:
	
	1. Click Start , and then click Run.
	
	2. Type in "MMC.EXE" (without the quotation marks) and click OK.
	
	3. Click Console in the new MMC you created, and then click Add/Remove Snap-in.
	
	4. In the new window that appears, click Add.
	
	5. Highlight Certificates , and then click Add.
	
	6. Choose the Computer account option and click Next.
	
	7. Select Local Computer on the next screen, and then click OK.
	
	8. Click Close , and then click OK.
	
	You have now added the Certificates snap-in, which will allow you to work with
	any certificates in your computer's certificate store. You may want to save this
	MMC for later use.
	
	Export a Certificate and Public Key
	-----------------------------------
	
	Now that you have added the Certificates snap-in, you can export the key pair
	that your Web server is using (the certificate and public key). To do this,
	perform the following steps:
	
	1. Open the Certificates (Local Computer) snap-in you added in the last section,
	  navigate to Personal, and then to Certificates.
	
	2. You will see your Web server certificate denoted by the CN (Common Name)
	  found in the Subject field of the certificate (using Internet Explorer 5.0,
	  you can easily view the certificate to see the Common Name if you are
	  unsure).
	
	3. Right-click on the server certificate, select All Tasks, and then click
	  Export.
	
	4. When the wizard starts, click Next. Choose to export the private key, and
	  then click Next.
	
	NOTE: If you export the certificate for use on an IIS Web server, do not select
	Require Strong Encryption. This option causes a password prompt every time an
	application attempts to access the private key, and causes IIS to fail.
	
	5. The file format you will want to choose is the Personal Information Exchange
	  (though you can select from several options). This will create a PFX file.
	  Notice that you can export any certificates in the certification path by
	  selecting the option on this screen. This is very handy if your certificate
	  was issued by a non-trusted certificate authority (for example, Microsoft
	  Certificate Server). Only choose delete the private key if the export is
	  successful to be sure it is not left on the computer (for example if your
	  migrating from one server to another).
	
	NOTE: If you do not select "Include all certificates in the certificate path if
	possible" and the issuer of the certificate is not trusted by your server, then
	you may notice that when the properties of the certificate are viewed, the "This
	certificate is issued to:" field may display "Windows does not have enough
	information about this certificate". This is by design and can be resolved by
	selecting "Include all certificates in the certificate path" while exporting the
	certificate.
	
	6. Click Next, and then choose a password to protect the PFX file. You will need
	  to enter the same password twice to ensure that the password is typed
	  correctly. When you have completed this step, click Next.
	
	7. Choose the file name you want to save this as. Do not include an extension in
	  your file name; the wizard will automatically add the PFX extension for you.
	
	8. Click Next, and then read the summary. Pay special attention to where the
	  file is being saved to. If you are sure the information is correct, choose
	  Finish.
	
	You now have a PFX file containing you server certificate and its corresponding
	private key. Be sure to protect this file! You may want to move it to a floppy
	disk and store it somewhere safe from outside disturbance. Keep in mind, if you
	run a backup on the server, this file may be saved in that backup if it is still
	on the server.
	
	Troubleshooting
	---------------
	
	For more information on troubleshooting SSL certificates, see the following
	articles:
	
	   - Q186796 - Troubleshooting "Invalid Password" Error Using SSL Certificates
	
	- Q254902 - Invalid SSL Certificates May Be Bypassed in Internet Explorer
	
	- Q296833 - Windows May Not Be Able to Handle SSL Certificates That Contain
	  Odd-Sized Keys
	
	REFERENCES
	==========
	
	For more information on SSL certificates, see the following articles:
	
	   - Q227888 - Importing a Key Backup File to Use in Internet Information Services
	  5.0
	
	For additional information about the import of backed up certificates, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q232137 How to Import a Server Certificate for Use in Internet Information
	  Services 5.0
	
	Additional query words: iis
	
	======================================================================
	Keywords          : kbAudITPro kbHOWTOmaster 
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Issue type        : kbhowto
	
	=============================================================================
	
