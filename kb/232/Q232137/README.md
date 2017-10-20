---
layout: page
title: "Q232137: How to Import a Server Certificate for Use in IIS 5.0"
permalink: /kb/232/Q232137/
---

## Q232137: How to Import a Server Certificate for Use in IIS 5.0

{% raw %}

	Article: Q232137
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use Internet Information Services (IIS) version 5.0, you may want to
	restore a server certificate, for example, if you are migrating one Web site to
	another server in a Web farm. This task is very easy to do using the Web Site
	Certificate Wizard and the Certificate Manager Import Wizard provided to you by
	Windows 2000 and IIS 5.0.
	
	MORE INFORMATION
	================
	
	In order to complete this operation, you must have a backup of the server
	certificate (and private key) contained in a PFX file. For additional
	information, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q232136 Back Up a Server Certificate in Internet Information Services 5.0
	
	You must also have access to the Certificates snap-in and have it set to view
	computer certificates from the local computer (though this can be done
	remotely).
	
	In order to view the Certificates store on the local computer, perform the
	following steps:
	
	1. Click Start, and then click Run.
	
	2. Type "MMC.EXE" (without the quotation marks) and click OK.
	
	3. Click Console in the new MMC you created, and then click Add/Remove Snap-in.
	
	4. In the new window, click Add.
	
	5. Highlight the Certificates snap-in, and then click Add.
	
	6. Choose the Computer option and click Next.
	
	7. Select Local Computer on the next screen, and then click OK.
	
	8. Click Close , and then click OK.
	
	9. You have now added the Certificates snap-in, which will allow you to work
	  with any certificates in your computer's certificate store. You may want to
	  save this MMC for later use.
	
	Now that you have access to the Certificates snap-in, you can import the server
	certificate into you computer's certificate store by following these steps:
	
	1. Open the Certificates (Local Computer) snap-in and navigate to Personal, and
	  then Certificates.
	
	  Note: Certificates may not be listed. If it is not, that is because there are
	  no certificates installed.
	
	2. Right-click Certificates (or Personal if that option does not exist.)
	
	3. Choose All Tasks, and then click Import.
	
	4. When the wizard starts, click Next. Browse to the PFX file you created
	  containing your server certificate and private key. Click Next.
	
	5. Enter the password you gave the PFX file when you created it. Be sure the
	  Mark the key as exportable option is selected if you want to be able to
	  export the key pair again from this computer. As an added security measure,
	  you may want to leave this option unchecked to ensure that no one can make a
	  backup of your private key.
	
	6. Click Next, and then choose the Certificate Store you want to save the
	  certificate to. You should select Personal because it is a Web server
	  certificate. If you included the certificates in the certification hierarchy,
	  it will also be added to this store.
	
	7. Click Next. You should see a summary of screen showing what the wizard is
	  about to do. If this information is correct, click Finish.
	
	8. You will now see the server certificate for your Web server in the list of
	  Personal Certificates. It will be denoted by the common name of the server
	  (found in the subject section of the certificate).
	
	Now that you have the certificate backup imported into the certificate store, you
	can enable Internet Information Services 5.0 to use that certificate (and the
	corresponding private key). To do this, perform the following steps:
	
	1. Open the Internet Services Manager (under Administrative Tools) and navigate
	  to the Web site you want to enable secure communications (SSL/TLS) on.
	
	2. Right-click on the site and click Properties.
	
	3. You should now see the properties screen for the Web site. Click the
	  Directory Security tab.
	
	4. Under the Secure Communications section, click Server Certificate.
	
	5. This will start the Web Site Certificate Wizard. Click Next.
	
	6. Choose the Assign an existing certificate option and click Next.
	
	7. You will now see a screen showing that contents of your computer's personal
	  certificate store. Highlight your Web server certificate (denoted by the
	  common name), and then click Next.
	
	8. You will now see a summary screen showing you all the details about the
	  certificate you are installing. Be sure that this information is correct or
	  you may have problems using SSL or TLS in HTTP communications.
	
	9. Click Next, and then click OK to exit the wizard.
	
	You should now have an SSL/TLS-enabled Web server. Be sure to protect your PFX
	files from any unwanted personnel.
	
	For additional information on backing up certificate files, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q232136 HOW TO: Back Up a Server Certificate in Internet Information Services
	  5.0
	
	Additional query words: iis
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
