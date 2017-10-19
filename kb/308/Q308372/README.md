---
layout: page
title: "Q308372: INFO: Logon Failure to Passport Returns &quot;f= &quot;  Error on the Quer"
permalink: /kb/308/Q308372/
---

## Q308372: INFO: Logon Failure to Passport Returns &quot;f= &quot;  Error on the Quer

	Article: Q308372
	Product(s): Microsoft Developer Network
	Version(s): 1.4,1.99,2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Passport, versions 1.4, 1.99, 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The "f= " error on the query string indicates that there may be a problem with
	the Passport network encryption operations. See the "More Information" section
	for the description of the error and corrective action to take. If you have
	questions, contact the DotNet Services Developer Support at the following email
	address:
	
	  nfssup@microsoft.com
	
	MORE INFORMATION
	================
	
	The f values that are returned on the query string in the browser Address bar
	typically indicate that there are problems with the Passport network. Possible
	values are listed in the following table which points to some of these
	problems:
	
	---------------------------------------------------------------------------
	Partner Return      Name                 Description of Error
	Error on Query
	String
	---------------------------------------------------------------------------
	f=1                 BAD_REQUEST          Domain database received a partial
	                                        request, Site ID did not match.
	---------------------------------------------------------------------------
	f=2                 OFFLINE              Domain database is offline and 
	                                        cannot service requests.
	---------------------------------------------------------------------------
	f=3                 TIMEOUT              Request to Domain database timed
	                                        out.
	---------------------------------------------------------------------------
	f=4                 LOCKED               User's account is locked, and  
	                                        user is not signed in (or both).
	---------------------------------------------------------------------------
	f=5                 NO_PROFILE           Profile type not available (wallet
	                                        or other extended profile not
	                                        present).
	---------------------------------------------------------------------------
	f=6                 DISASTER             The logon server has determined 
	                                        that some (although not all) of
	                                        of the network servers that are 
	                                        responsible for performing the 
	                                        steps of the authentication
	                                        checks are currently down, and the
	                                        logon server timed out trying to
	                                        reach them. If f=6 occurs, the 
	                                        user will never be authenticated
	                                        and no valid t and p will be on
	                                        the query string. If this error
	                                        is received, consider switching
	                                        your site to stand-alone mode. 
	---------------------------------------------------------------------------
	f=7                INVALID_KEY           Ticket or Profile cookie was
	                                        encrypted using invalid key and
	                                        cannot be decrypted. To resolve
	                                        this, reinstall key correctly.
	---------------------------------------------------------------------------
	f=8                (no internal          Error in parsing or processing the
	                  resource name)        participant's XML site
	                                        configuration data on the network
	                                        side. To resolve this, pass a 
	                                        valid SVC parameter (for example,
	                                        Mail).  
	---------------------------------------------------------------------------
	f=9                (no internal          Uncategorized or unhandled
	                  resource name)        exception. Escalate to Passport
	                                        Ops.
	---------------------------------------------------------------------------
	f=10               (no internal          Site attempted to specify KPP=2,
	                  resource name)        3, or 4 in call to logon server, 
	                                        but was not configured to use Kids
	                                        Passport. To resolve, provision
	                                        your site as a Kids site.
	---------------------------------------------------------------------------
	f=11               USER_CANCELLED        The user clicked cancel on the 
	                                        logon UI. This issue is especially 
	                                        important for Windows XP 
	                                        compatibility. If the error is not
	                                        caught on the participant's RU,
	                                        the user remains in an infinite 
	                                        loop where the logon UI continues 
	                                        to appear and permits the user no 
	                                        way out. Message the user if PP  
	                                        logon is required.
	---------------------------------------------------------------------------
	f=12              (no internal           When using SecLvl 10 or 100, RU
	                 resource name)         must be SSL.
	---------------------------------------------------------------------------
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMSNSearch kbPassport140 kbPassport199 kbPassport200 kbPassportSearch
	Version           : :1.4,1.99,2.0
	Issue type        : kbinfo
	
	=============================================================================
	
