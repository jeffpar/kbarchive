---
layout: page
title: "Q277893: How to Renew Certificates That Are Used with IIS 4.0"
permalink: /kb/277/Q277893/
---

## Q277893: How to Renew Certificates That Are Used with IIS 4.0

{% raw %}

	Article: Q277893
	Product(s): Internet Information Server
	Version(s): 2.0,4.0
	Operating System(s): 
	Keyword(s): MSGRAPH
	Last Modified: 28-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Certificate Services, version 2.0 
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Certificates that are installed on computers running Internet Information Server
	(IIS) 4.0 are usually set to expire in one year from the issue date depending on
	the Certificate Authority that issued them.
	
	If you have a certificate that is about to expire, you have the option of
	renewing it to make sure that it continues to be valid. This article describes
	the steps in the renew process.
	
	MORE INFORMATION
	================
	
	In IIS 4.0, certificates are set in Key Manager and bound to different IP
	addresses and ports. To renew a certificate that is used with a certain Web
	site, perform the following steps:
	
	1. In Internet Service Manager, open Key Manager.
	
	2. Click the key for which you want to renew the certificate.
	
	3. On the drop-down menu, click Key, and then click Create Renewal Request.
	
	4. If you have an online certificate authority (such as Microsoft Certificate
	  Server 1.0 or 2.0), click Automatically send the request to an online
	  Authority, and then follow the wizard to complete the renew process.
	
	  If you do not have an online certificate authority, click Put the request in a
	  file that you will send to an Authority.
	
	5. Select the request file, and note the directory where you save it.
	
	6. Click Next, fill in the information, and then click Finish to complete the
	  wizard. When you get a message stating that the request has been generated,
	  click OK. You now have a renewal request file.
	
	NOTE: If you received your certificate from a third-party authority (for example,
	Verisign), you need to send them the renew request file, and wait for them to
	send the renew request. (You can then continue from step 14.)
	
	If you are running Microsoft Certificate Server 1.0 or 2.0, and received the
	original certificate from it, you can submit the renewal request by using the
	Web interface.
	
	7. Open the request file generated in the previous step, and then copy the
	  following section:
	
	  -----BEGIN NEW CERTIFICATE REQUEST----- until and including -----END NEW
	  CERTIFICATE REQUEST-----
	
	8. Open your Certificate Server Web interface (for example,
	  http://CertificateServerName/certsrv).
	
	9. Click Request a certificate, click Next, click Advanced Request, and then
	  click Next. (In Certificate Server 1.0, click Certificate enrollment tools,
	  click Process a certificate request, and go to step 11.)
	
	10. Click Submit a certificate request using a base64 encoded PKCS#10..., and
	  then click Next.
	
	11. In the Saved request box, paste the text that you copied in step 7, and then
	  click Next.
	
	12. Click Download CA certificate, and then save the file on your hard drive.
	  You now have the renewed certificate.
	
	13. In Internet Service Manager, open Key Manager.
	
	14. Select the key that you requested to renew, click Key on the menu, and then
	  click Install Key certificate.
	
	15. Select the new .cer file that has the reply to your renewal request, and
	  then click OK.
	
	16. Enter the password for the certificate, and then click OK.
	
	17. Verify the server bindings. If the Web site is bound to Any Unassigned, this
	  key should be bound to All Unassigned. If the Web site is bound to a
	  specific IP address and port combination, this key should be bound to the
	  same IP address and port combination. Click OK.
	
	You have successfully renewed the certificate that is used with IIS 4.0.
	
	Additional query words: iis 4
	
	======================================================================
	Keywords          : MSGRAPH 
	Technology        : kbiisSearch kbiis400 kbCertServSearch kbZNotKeyword3 kbCertServ200
	Version           : :2.0,4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
