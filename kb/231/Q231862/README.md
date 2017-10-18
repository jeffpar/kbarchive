---
layout: page
title: "Q231862: INF: Configuring COMTI to use TCP/IP Link to CICS"
permalink: kb/231/Q231862/
---

## Q231862: INF: Configuring COMTI to use TCP/IP Link to CICS

	Article: Q231862
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0 SP2,4.0SP2
	Operating System(s): 
	Keyword(s): kbsna400sp2
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft COM Transaction Integrator for CICS and IMS, version 4.0 SP2 
	- Microsoft SNA Server, version 4.0SP2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to configure a TCP/IP link to CICS, using the Cedar
	Bank sample provided with COM Transaction Integrator for CICS and IMS (COMTI).
	You need Windows NT 4.0 Service Pack 3 or greater, SNA Server 4.0 Service Pack
	2, and the host requires TCP/IP V3R2 and CICS 3.1 or greater.
	
	MORE INFORMATION
	================
	
	1. Verify that the CICS region supports TCP/IP, and that the IBM-supplied
	  listener (program EZACIC02, tranID CSKL) is defined. You will need to
	  determine the IP address on the mainframe and the TCP/IP port number of the
	  listener. You can verify the TCP port number by using the following CICS
	  command: EZAC DISPLAY LISTENER. Both IP address and TCP port number must be
	  entered in the COMTI CICS TCP/IP Remote Environment (RE). The following
	  information describes the process of configuring the host for TCP/IP to CICS
	  and CICS to TCP/IP
	
	   - TCP/IP to CICS Configuration
	
	     A TCP/IP port number is associated with a CICS region in the TCP/IP profile
	     data set (hlq.PROFILE.TCPIP). The port statement is used to define this
	     relationship. An example of a port statement that associates port 3000
	     with CICS region CICSRG is:
	
	  3000 TCP CICSRG
	
	   - CICS to TCP/IP Configuration
	
	      - Defining CICS to TCP Using the EZAC Transaction
	
	        The following is a sample host definition:
	
	EZAC,DEFINE                                                                    
	ENTER ONE OF THE FOLLOWING                                                     
	                                                                               
	CICS         ===> yes                   Enter Yes|No                            
	LISTENER     ===>                       Enter Yes|No
	
	EZAC,DEFINE,CICS                                                               
	ENTER ALL FIELDS                                                              
	                                                                               
	APPLID       ===> CICSRG                APPLID of CICS System
	
	EZAC,DEFINE,CICS                                                               
	OVERTYPE TO ENTER                                                              
	                                                                               
	APPLID       ===> CICSRG                APPLID of CICS System                   
	TCPADDR      ===> TCPIP                 Name of TCP Address Space               
	NTASKS       ===> 020                   Number of Reusable Tasks                
	DPRTY        ===> 000                   DPRTY value for ATTACH                  
	CACHMIN      ===> 015                   Minimum Refresh Time for Cache          
	CACHMAX      ===> 030                   Maximum Refresh Time for Cache          
	CACHRES      ===> 010                   Maximum number of Resolvers             
	ERRORTD      ===> CSMT                  TD Queue for Error Messages
	
	      - Defining CICS Listener Parameters Using the EZAC Transaction
	
	        The following is a sample host definition:
	
	EZAC,DEFINE                                                                    
	ENTER ONE OF THE FOLLOWING                                                     
	                                                           
	CICS         ===>                       Enter Yes|No                            
	LISTENER     ===> yes                   Enter Yes|No
	
	EZAC,DEFINE,LISTENER                                                           
	ENTER ALL FIELDS                                                              
	                                                                               
	APPLID       ===> CICSRG                APPLID of CICS System                   
	NAME         ===> CSKL                  TRANSACTION NAME OF LISTENER
	
	EZAC,defiNE,LISTENER                                                           
	OVERTYPE TO ENTER                                                              
	                                                                               
	APPLID       ===> CICSRG                APPLID of CICS System                   
	TRANID       ===> CSKL                  Transaction Name of Listener            
	PORT         ===> 03000                 Port Number of Listener                 
	IMMEDIATE    ===> YES                   Immediate Startup   Yes|No              
	BACKLOG      ===> 010                   Backlog Value for Listener              
	NUMSOCK      ===> 050                   Number of Sockets in Listener           
	MINMSGL      ===> 004                   Minimum Message Length                  
	ACCTIME      ===> 060                   Timeout Value for ACCEPT                
	GIVTIME      ===> 030                   Timeout Value for GIVESOCKET            
	REATIME      ===> 000                   Timeout Value for READ                  
	FASTRD       ===> YES                   Read Immediately    Yes|No              
	TRANTRN      ===> YES                   Translate TRNID     Yes|No              
	TRANUSR      ===> YES                   Translate User Data Yes|No              
	SECEXIT      ===>                       Name of Security Exit
	
	   - For further information, refer to IBM document #SC31-7131, "TCP/IP V3R2
	     for MVS: CICS TCP/IP Socket Interface Guide."
	
	2. Start the IBM-supplied listener using the following command: EZAO START. You
	  can view the status of the listener by using the following CICS command: CEMT
	  INQUIRE TASK, look for CSKL.
	
	3. Compile the MS-provided sample server for the IBM-provided listener. IBM does
	  not provide a child server for its listener, but IBM does provide samples,
	  documented in Appendix F of the TCP/IP Socket Guide. Microsoft also provides
	  a sample (MSCMTICS), which invokes link model transactions.
	
	  DISCLAIMER: The COMTI sample program is not intended for use in production
	  environments. It is provided to you to demonstrate the techniques you can use
	  to develop your own server for production use.
	
	  Sources for the Microsoft sample are found in the
	  <snaroot>\COMTI\SampleCode\ProgrammingSpecifics\TCP\Mscmtics.cbl file.
	  This file implements the "child server" function described in the
	  "Client-listener, child server" application set documented as item 1 of
	  chapter 6.2 of the Socket Interface Guide. The other sample source files in
	  this folder are for the other sub-modes of TCP connectivity for CICS and IMS.
	  MSCMTICS should be compiled and linked as a standard CICS transaction, and
	  should be installed by means of CEDA DEF TRANSACTION. You can use the default
	  name "MSCM" for this transaction or you can create another transaction ID.
	
	  The remaining steps are performed on the computer running Windows NT Server.
	  Using the COMTI administrative snap-in for MMC, you will create a TCP/IP
	  Remote Environment. Then, using Component Builder, you will create and deploy
	  a Cedar Bank component based on the TCP MS Link model rather than the
	  APPC-based CICS Link component included with SNA Server. The new component
	  will have exactly the same COM interface as the original APPC-based
	  component, but uses TCP and the MS Link model to communicate with the host
	  programs.
	
	4. Create a New TCP/IP Remote Environment in COMTI Manager.
	
	  a. In the COMTI MMC Console, open the COM Transaction Integrator snap-in,
	     select the Remote Environments folder, right-click, and choose N)ew
	     R)emote Environment.
	
	  b. In the Add Remote Environment dialog box, select "CICS and IMS using
	     TCP/IP", and click OK.
	
	  c. In the Remote Environment Wizard, enter the IP address of the host noted
	     in step 1 above, enter the TCP port number, also noted in step 1, and
	     click OK.
	
	5. Because the TCP Cedar Bank component has the same interface and class ID as
	  the APPC model, before you deploy the TCP component, you must unregister any
	  existing APPC Cedar Bank component you might have defined in Microsoft
	  Transaction Services. Use the following steps to remove the APPC Cedar Bank
	  component:
	
	  a. In the COMTI MMC console (or any other MMC console with the Microsoft
	     Transaction Services snap-in installed), open the Microsoft Transaction
	     Server snap-in, then open the Installed Packages folder, browse to the
	     package in which you deployed Cedar Bank, and delete that component from
	     the package.
	
	  b. To ensure the package process notices the configuration change, select the
	     package, right-click, and select Stop Process.
	
	6. Create the TCP CedarBank Component.
	
	  a. Open Component Builder, and select F)ile N)ew.
	
	  b. In the New Component Library dialog box, type a library name of "Cedar"
	     (without the quotation marks) and an interface name of "Bank" (without the
	     quotation marks). Also, under Remote Environment Type, select "CICS and
	     IMS via TCP/IP", under Target Environment, select CICS, and under Server
	     Type, select MS Link. Click OK.
	
	  c. Select F)ile I)mport Component L)ibrary. In the Insert Component Library
	     dialog box, browse to <snaroot>\COMTI\Tutorials\CedarBank\CICSLink,
	     select Cedar.tlb, and click OK. The Cedar Bank component will now appear
	     in the Component Builder screen.
	
	  d. Specify the name of the CICS server transaction as the TP Name property
	     for the GETACCTS and CEDRBANK methods. In the left-hand pane, select the
	     root component (interface "Bank") and right-click, then select Unlock from
	     the pop-up menu. Select each method, right-click and select Pr)operties.
	     In the Properties dialog box, select the Host Names tab. In the TP Name
	     field, enter MSCM (or whatever CICS transaction ID you used when defining
	     the MSCMTICS program in step 3). Click OK.
	
	  e. In Component Builder, on the File menu, click Save to save this type
	     library to disk with file name CedarBankTcp.tlb (or any name other than
	     CedarBank).
	
	7. Deploy the TCP Cedar Bank component in MTS and assign it to the TCP Remote
	  Environment created in step 4. You can use the deployment wizard in Component
	  Builder:
	
	  a. At the Component Builder main menu, select T)ools A)dd to Package.
	
	  b. In the Add to Transaction Server Package dialog box, select the MTS
	     package you want from the left-hand panel, and select the TCP Remote
	     Environment you configured in step 4 in the right-hand panel. Click OK.
	
	8. The Cedar Bank Sample Application is ready to be invoked. Open the Cedar Bank
	  Sample, and invoke each of the methods.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna400sp2 
	Technology        : kbAudDeveloper kbSNAServSearch kbCOMTISearch kbCOMTI400SP2
	Version           : WINDOWS:4.0 SP2,4.0SP2
	Issue type        : kbinfo
	
	=============================================================================
	
