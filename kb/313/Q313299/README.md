---
layout: page
title: "Q313299: HOW TO: Load Balance a Web Server Farm Using One SSL Certificate"
permalink: kb/313/Q313299/
---

## Q313299: HOW TO: Load Balance a Web Server Farm Using One SSL Certificate

	Article: Q313299
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbenv kbAudITPro kbHOWTOmaster
	Last Modified: 22-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	
	IN THIS TASK
	------------
	
	- SUMMARY
	
	   - How to Obtain and Install a Web Server Certificate for the First Web Server
	- How to Install a Signed Certificate
	- How to Export a Private Key
	- How to Import a Certificate to the Personal Store
	- How to Assign the Imported Certificate to the Web Site
	
	SUMMARY
	=======
	
	This step-by-step article describes how to set up Web server farms that contain
	multiple Internet Information Services (IIS) Web servers with the same
	certificate. When you do so, communications between the Web client computers and
	servers are secured by Secure Sockets Layer (SSL).
	
	How to Obtain and Install a Web Server Certificate for the First Web Server
	---------------------------------------------------------------------------
	
	To perform load balancing of a Web server farm with a single certificate:
	
	1. Click Start, point to Programs, point to Administrative Tools, and then click
	  Internet Services Manager.
	
	2. Click to expand your server name, right-click the Web site, and then click
	  Properties.
	
	3. Click the Directory Security tab.
	
	4. Click Server Certificate.
	
	5. After the Web Server Certificate Wizard starts, click Next.
	
	6. On the Server Certificate page, click the method that you want to use to
	  assign the site a new certificate, for example, click "Create a new
	  certificate".
	
	7. On the "Delayed or Immediate Request" page, click one of the following
	  options, and then click Next.
	
	   - If you have an online certificate server in your organization, click "Send
	     the request immediately to the online certification authority".
	
	     -or-
	
	   - If you need to send the request to a third-party provider or to a
	     certification authority (CA) that is off the network, click "Prepare the
	     request now, but send it later". (The procedure described in this article
	     assumes that you click this option.)
	
	8. On the "Name and Security Settings" page, type a name for the new certificate
	  in the Name box, click 1024 in the Bit length box, and then click Next.
	
	9. On the Organization Information page, type the name of your organization in
	  the Organization box, type the name of your organizational unit in the
	  Organizational Unit box, and then click Next.
	
	10. On the "Your Site's Common Name" page, type the fully qualified domain name
	  (FQDN) that users use to access the site in the Common name box, and then
	  click Next.
	
	  NOTE: If you use the server on the intranet only, you can use the NetBIOS
	  name of the server.
	
	11. On the Geographic Information page, click your country in the Country/Region
	  box, type the full name of your state or your province in the State/province
	  box, type the full name of your city or your locality in the City/locality
	  box, and then click Next.
	
	12. On the "Certificate Request File Name" page, type the complete path to the
	  certificate request file (a default value is entered for you), and then
	  click Next.
	
	13. On the Request File Summary page, review the settings, and then click Next.
	
	14. On the "Completing the Web Server Certificate Wizard" page, click Finish.
	
	15. Retrieve the certificate request, and then either e-mail the request or use
	  a floppy disk to deliver the request to your CA provider. The provider
	  returns the signed certificate to you.
	
	16. Install the certificate on the Web server.
	
	How to Install a Signed Certificate
	-----------------------------------
	
	1. Obtain and install a Web server certificate for the first Web server.
	
	2. Click Start, point to Programs, point to Administrative Tools, and then click
	  Internet Services Manager.
	
	3. Click to expand your server name, right-click the Web site, and then click
	  Properties.
	
	4. Click the Directory Security tab, and then click Server Certificate.
	
	5. After the Web Server Certificate Wizard starts, click Next.
	
	6. On the Pending Certificate Request page, click "Process the pending request
	  and install the certificate", and then click Next.
	
	7. On the Process a Pending Request page, type the full path to the certificate
	  in the "Path and file name" box, and then click Next.
	
	8. On the Certificate Summary page, review the settings in the certificate, and
	  then click Next.
	
	9. On the "Completing the Web Server Certificate Wizard" page, click Finish.
	
	10. Click OK.
	
	11. Stop and restart the Web site.
	
	How to Export a Private Key
	---------------------------
	
	Perform the following steps to export the key that you installed on the first Web
	server. This key is imported to other Web servers in the farm.
	
	1. Click Start, and then click Run.
	
	2. Type mmc in the Open box, and then click OK.
	
	3. On the Console menu, click Add/Remove snap-in, and then click Add.
	
	4. Click Certificates, and then click Add.
	
	5. Click Computer account, and then click Next.
	
	6. Click "Local computer (the computer this console is running on)", and then
	  click Finish.
	
	7. Click Close, and then click OK.
	
	8. In the left pane, click to expand the Certificates node, and then click to
	  expand the Personal node.
	
	9. Click the Certificates node under the Personal node.
	
	10. Right-click the Web server certificate in the right pane, point to All
	  Tasks, and then click Export.
	
	11. After the Certificate Export Wizard starts, click Next.
	
	12. On the Export Private Key page, click "Yes, export the private key", and
	  then click Next.
	
	13. On the Export File Format page, click to select the "Include all
	  certificates in the certification path if possible" check box, and then
	  click Next.
	
	  NOTE: If you want to enable strong protection for Microsoft Internet Explorer
	  5.0 or Microsoft Windows NT 4.0 service pack or later clients, click to
	  select the Enable strong protection check box.
	
	14. On the Password page, type a password in the Password box, retype the
	  password in the Confirm password box, and then click Next.
	
	15. On the "File to Export" page, type the file name of the exported certificate
	  in the File name box, and then click Next.
	
	16. On the "Completing the Certificate Export Wizard" page, click Finish.
	
	How to Import a Certificate  to the Personal Store
	--------------------------------------------------
	
	After the certificate has been exported, copy the certificate to a location on
	another Web server in the load balanced server farm. You must import the
	certificate to the computer's Personal certificate store. To import the
	certificate to the computer's Personal certificate store:
	
	1. Click Start, and then click Run.
	
	2. Type mmc in the Open box, and then click OK.
	
	3. On the Console menu, click Add/Remove snap-in, and then click Add.
	
	4. Click Certificates, and then click Add.
	
	5. Click Computer account, and then click Next.
	
	6. Click "Local computer (the computer this console is running on)", and then
	  click Finish.
	
	7. Click Close, and then click OK.
	
	8. In the left pane, click to expand the Certificates node, and then click to
	  expand the Personal node.
	
	9. Right-click the Certificates node under the Personal node, point to All
	  Tasks, and then click Import.
	
	10. When the Certificate Import Wizard starts, click Next.
	
	11. On the "File to Import" page, type the complete path to the file or click
	  the Browse button to enter the file in the File name box, and then click
	  Next.
	
	12. On the Password page, type the password that is assigned to the certificate
	  in the Password box.
	
	13. On the Certificate Store page, click "Place all certificates in the
	  following store", confirm that Personal is selected as the store, and then
	  click Next.
	
	14. On the "Completing the Certificate Import Wizard" page, click Finish.
	
	15. Click OK.
	
	How to Assign the Imported Certificate to the Web Site
	------------------------------------------------------
	
	To assign the imported certificate to the Web site:
	
	1. Click Start, point to Programs, point to Administrative Tools, and then click
	  Internet Services Manager.
	
	2. Click to expand your server name, right-click the Web site, and then click
	  Properties.
	
	3. Click the Directory Security tab, and then click Server Certificate.
	
	4. After the Web Server Certificate Wizard starts, click Next.
	
	5. On the Server Certificate page, click "Assign an existing certificate", and
	  then click Next.
	
	6. On the Available Certificates page, click the certificate that you imported,
	  and then click Next.
	
	7. On the Certificate Summary page, review the settings, and then click Next.
	
	8. On the "Completing the Web Server Certificate Wizard" page, click Finish.
	
	9. Click OK.
	
	Repeat the import and the certificate assignment procedures on any other server
	in the Web server farm.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbAudITPro kbHOWTOmaster 
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Issue type        : kbhowto
	
	=============================================================================
	
