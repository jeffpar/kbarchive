---
layout: page
title: "Q294278: Security Settings in the Source Code in SDK Need Adjustment"
permalink: /kb/294/Q294278/
---

## Q294278: Security Settings in the Source Code in SDK Need Adjustment

{% raw %}

	Article: Q294278
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbinterop kbConfig kbSecurity kbWBEM kbsms200 kbsmsUtil
	Last Modified: 02-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the adjustment of some of the security settings in the
	source code that is provided for the sample programs in the Microsoft Platform
	Software Development Kit (SDK).
	
	MORE INFORMATION
	================
	
	When you use the sample programs in the Systems Management Server (SMS) portion
	of the Microsoft Platform SDK, you may have to adjust some of the security
	settings that are implemented in the source code that is provided for the sample
	programs.
	
	The source code is provided for each sample to demonstrate basic functionality
	and to provide an example of how a particular task can be accomplished by means
	of a program.
	
	NOTE: Microsoft provides script, macro, and other code examples for illustration
	only, without warranty either expressed or implied, including but not limited to
	the implied warranties of merchantability and/or fitness for a particular
	purpose. This script is provided "as is" and Microsoft does not guarantee that
	the script, macro, or code can be used in all situations.
	
	If the Microsoft Visual C++, Microsoft Visual Basic, and Microsoft Visual Basic
	Scripting Edition samples are used directly from previous versions, and they are
	run from a Windows NT 4.0-based computer, your computer may experience
	unpredictable behavior. For this reason, Microsoft recommends that you enable
	the distributed version of Component Object Model (DCOM) impersonation level of
	"Impersonate". For more details, refer to the following Microsoft Developer
	Network Web site:
	
	  http://msdn.microsoft.com
	
	SMS, and the SMS Windows Management Instrumentation SMS Providers enforce a
	strong security model. Because of this requirement, the SMS Provider uses the
	Impersonation method.
	
	For example, when you compile the Visual C++ sample source code, you must ensure
	that you specify "Impersonation" in your "CoInitializeSecurity" call:
	
	  return CoInitializeSecurity (NULL, -1, NULL, NULL, 
	          bAuthenticate ? RPC_C_AUTHN_LEVEL_PKT : RPC_C_AUTHN_LEVEL_NONE, 
	          RPC_C_IMP_LEVEL_IMPERSONATE, NULL, EOAC_NONE, 0);
	
	Then, you must recompile the program to update the executable files.
	
	In your Visual Basic code, you must specify "Impersonation" as demonstrated in
	the following example:
	
	  WbemServices.Security_.ImpersonationLevel = wbemImpersonationLevelImpersonate
	
	Then, you must recompile the program to update the executable files.
	
	In Visual Basic Scripting Edition, you must specify "Impersonation" as
	demonstrated in the following example:
	
	  winmgmts:{impersonationLevel=impersonate}
	
	Because VBScripts are not compiled, any changes are effective the next time that
	the script is run.
	
	NOTE: The preceding changes have been incorporated into the current release of
	the Microsoft Platform SDK, which is available at the following Microsoft File
	Transfer Protocol (FTP) site:
	
	  ftp://ftp.microsoft.com/
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbinterop kbConfig kbSecurity kbWBEM kbsms200 kbsmsUtil 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
