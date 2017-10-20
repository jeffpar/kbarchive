---
layout: page
title: "Q268500: Advertisement Rescheduling May Fail Due to Improper APM Code"
permalink: /kb/268/Q268500/
---

## Q268500: Advertisement Rescheduling May Fail Due to Improper APM Code

{% raw %}

	Article: Q268500
	Product(s): Microsoft Systems Management Server
	Version(s): 1.2,2.0,2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms120 kbsms120bug kbSoftwareDist kbsms200preSP3fix kbsms200SP3f
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.2, 2.0, 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You have set your computer system's connection limit to a fixed number of
	distribution points. This prevents the overload of the distribution servers when
	a large number of clients attempt to run an advertisement at the same time.
	Clients can attach to the distribution point until the connection limit is
	reached. Any additional clients that attempt to attach to a connection-limited
	distribution point are denied access and an error message is recorded in the
	SMSAPM32 log indicating the failed connection. The clients can retry the
	connection every 10 minutes.
	
	In rare circumstances, the Advertisement Program Manager (APM) displays a
	non-normal error code that does not allow the client to enter the Retry mode and
	the advertisement cannot run.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q288239 SMS: How to Obtain the Latest Systems Management Server 2.0 Service
	  Pack
	
	WORKAROUND
	==========
	
	To work around this issue, create a new program for the failed package and a new
	advertisement that targets the clients that failed to run the package.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Systems Management Server 2.0 Service Pack 3.
	
	MORE INFORMATION
	================
	
	The SMSAPM32 log contains the following types of messages when the error occurs
	and the job is not rescheduled automatically as it should be:
	
	  
	
	  SCHED DATA  : Return code = 0x80070047; No more connections can be made to this remote computer at this time because there are already as many connections as the computer can accept.~~; Could not enable program 'test1.bat'.~  $$<APM><Tue May 16 13:17:10.804 2000><thread=1512 (0x5E8)>
	  IPC PIPE    : HANDLE 0x234 IPC Close Event signaled SMS_CLIENT_EVENT_PEA32_CLOSE~  $$<APM><Tue May 16 13:17:10.834 2000><thread=532 (0x214)>
	  IPC PIPE    : CAPPipe::SmartReadFile - Shutdown Signaled _SMS_SMARTFILE_CLIENT_SEMAP_630.1~  $$<APM><Tue May 16 13:17:10.834 2000><thread=532 (0x214)>
	  IPC PIPE    : ---> Client has disconnected. Shutting down this IPC thread. <--~  $$<APM><Tue May 16 13:17:10.834 2000><thread=532 (0x214)>
	  IPC PIPE    : CAPPipe :: BlockingListen - Setting NOT_CONNECTED~  $$<APM><Tue May 16 13:17:10.834 2000><thread=532 (0x214)>
	  IPC PIPE    : Shutdown In Progress on call to CAPPipe::WaitOnEvent~  $$<APM><Tue May 16 13:17:10.844 2000><thread=1512 (0x5E8)>
	  IPC PIPE    : ERROR: BlockingSendMessage DID NOT RECEIVE REPLY TO MESSAGE. Message Type = 0x4000008  $$<APM><Tue May 16 13:17:10.844 2000><thread=1512 (0x5E8)>
	  IPC SERVER  : CAPPipeServer :: Release - Refcount now 1~  $$<APM><Tue May 16 13:17:10.844 2000><thread=1512 (0x5E8)>
	  SCHED DATA  : Reporting status : APA_JOB_STATUS_UNKNOWN~  $$<APM><Tue May 16 13:17:10.844 2000><thread=1512 (0x5E8)>
	  SCHED DATA  : Setting job status to 0xd.~  $$<APM><Tue May 16 13:17:10.854 2000><thread=1512 (0x5E8)>
	  SCHED DATA  : Program completed unsuccessfully.~  $$<APM><Tue May 16 13:17:10.854 2000><thread=1512 (0x5E8)>
	  SCHED DATA  : Handling an error condition (0x80070047) for program Run test1.bat in package Test batch file #1.~  $$<APM><Tue May 16 13:17:10.854 2000><thread=1512 (0x5E8)>
	  SCHED DATA  : Beginning with a job run status set to APA_RUNSTATUS_NOT_RUNNING.~  $$<APM><Tue May 16 13:17:10.854 2000><thread=1512 (0x5E8)>
	  SCHED DATA  : *** UNRECOGNISED JOB COMPLETION RETURN CODE. ASSUMING UNSUCCESSFUL EXECUTION~  $$<APM><Tue May 16 13:17:10.854 2000><thread=1512 (0x5E8)>
	  SCHED DATA  : The error requires that some type of reschedule action be taken.~  $$<APM><Tue May 16 13:17:10.854 2000><thread=1512 (0x5E8)>
	  SCHED DATA  : Attempting to get action for failure condition 0x80070047.~  $$<APM><Tue May 16 13:17:10.854 2000><thread=1512 (0x5E8)>
	  SCHEDULER   : The monitor has indicated that a countdown dialog is not required before executing a scheduled program.~  $$<APM><Tue May 16 13:17:10.854 2000><thread=1512 (0x5E8)>
	  SCHED DATA  : The job failed or some unknown error has occurred.  Get the Job Failed Action from the registry.~  $$<APM><Tue May 16 13:17:10.864 2000><thread=1512 (0x5E8)>
	  SCHED DATA  : Returning action code 2.~  $$<APM><Tue May 16 13:17:10.864 2000><thread=1512 (0x5E8)>
	  SCHED DATA  : Determining whether to unschedule or schedule this job based on its current settings.~  $$<APM><Tue May 16 13:17:10.884 2000><thread=1512 (0x5E8)>
	  SCHED DATA  : For program Run test1.bat in package Test batch file #1 compiling all offers in order to get its schedule time and attributes.~  $$<APM><Tue May 16 13:17:10.894 2000><thread=1512 (0x5E8)>
	  SCHEDULER   : Determining whether to unschedule or schedule the next time the program will run ...~  $$<APM><Tue May 16 13:17:10.894 2000><thread=1512 (0x5E8)>
	  SCHEDULER   : Unscheduling program Run test1.bat in package Test batch file #1 for <ANY USER>.~  $$<APM><Tue May 16 13:17:10.894 2000><thread=1512 (0x5E8)>
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms120 kbsms120bug kbSoftwareDist kbsms200preSP3fix kbsms200SP3fix 
	Technology        : kbSMSSearch kbSMS120 kbSMS200 kbSMS200SP1 kbSMS200SP2
	Version           : :1.2,2.0,2.0 SP1,2.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
