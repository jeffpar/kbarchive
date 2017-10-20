---
layout: page
title: "Q150958: INFO: Troubleshooting Enhanced PC Support APPC (Ehnappc.dll) Err"
permalink: /kb/150/Q150958/
---

## Q150958: INFO: Troubleshooting Enhanced PC Support APPC (Ehnappc.dll) Err

{% raw %}

	Article: Q150958
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11 SP1;2.11 SP2,3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11 SP1, 2.11 SP2, 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The SNA Server Windows 3.x client software includes support for the
	IBM-compatible Enhanced PC Support APPC API interface, through a Microsoft
	version of Ehnappc.dll. Both IBM-compatible and NetSoft-compatible versions of
	Ehnappc.dll are shipped with SNA Server. The IBM-compatible version is installed
	with the SNA Server Windows 3.x client, though the NetSoft- compatible version
	must be manually copied from the SNA Server compact disc, located in
	<cdrom>\Clients\Win3x\Ehnns\Ehnappc.dll.
	
	The SNA Server Ehnappc.dll interface communicates over the SNA Server Windows
	APPC (Winappc.dll) interface, and maps return codes as defined by the Windows PC
	Support APPC API. This article describes SNA Server return codes that are
	returned by the SNA Server Ehnappc.dll interface, along with the cause of the
	error.
	
	MORE INFORMATION
	================
	
	
	The following is a list of Enhanced PC Support error codes and corresponding SNA
	Server WINAPPC error codes, as returned by the SNA Server Ehnappc.dll interface.
	To troubleshoot the specific cause of the problem, SNA Server Windows 3.x client
	APPC, LU6.2 and internal traces should be captured. For instructions, see the
	following Knowledge Base article:
	
	  Q123256 Enabling SNA Server Windows 3.x Client Traces
	
	0x0 (EHNAPPC_OK)
	
	  primary_rc   = 0 (AP_OK)
	
	The verb executed successfully
	
	0x1 (EHNAPPC_DEALLOCNORMAL)
	
	  primary_rc   = 0009 (AP_DEALLOC_NORMAL)
	
	The partner TP has deallocated the conversation without requesting confirmation.
	
	0x2 (EHNAPPC_PROGRAMERRNOTRUNCATION)
	
	  primary_rc  = 0011 (AP_SVC_ERROR_NO_TRUNC)
	
	or
	
	  primary_rc  = 000C (AP_PROG_ERROR_NO_TRUNC)
	
	While in a SEND state, the partner TP (or partner LU) issued a SEND_ERROR. The
	data was not truncated.
	
	0x3 (EHNAPPC_PROGRAMERRTRUNCATION)
	
	  primary_rc  = 0012 (AP_SVC_ERROR_TRUNC and AP_PROG_ERROR_TRUNC)
	
	In a SEND state, after sending an incomplete logical record, the partner TP
	issued SEND_ERROR. The local TP may have received the first part of the logical
	record.
	
	0x4 (EHNAPPC_PROGRAMERRPURGING)
	
	  primary_rc  = 0013 (AP_SVC_ERROR_PURGING)
	
	or
	
	  primary_rc  = 000E (AP_PROG_ERROR_PURGING)
	
	The partner TP (or partner LU) issued SEND_ERROR while in RECEIVE_PENDING,
	PENDING_POST, CONFIRM, CONFIRM_SEND, or CONFIRM_DEALLOCATE state. Data sent to
	the partner program may have been purged.
	
	0x5 (EHNAPPC_RESOURCEFAILURERETRY)
	
	SNA Server does not return this error. 0x6 (EHNAPPC_RESOURCEFAILURENORETRY)
	
	Internal SNA client task table is full. Maximum number of tasks (10) are already
	running. Unable to register new task.
	
	0x7 (EHNAPPC_UNSUCCESSFUL)
	
	  primary_rc = 0014 (AP_UNSUCCESSFUL)
	
	No data is immediately available from the partner TP.
	
	0x8 (EHNAPPC_APPCBUSY)
	
	  primary_rc = F002 (AP_TP_BUSY)
	
	The local TP has issued a call to APPC while APPC was processing another call
	from the same TP. See Q137246 for another possible cause for this problem.
	
	or
	
	  primary_rc = F005 (AP_CONV_BUSY)
	
	The local TP issued a conversation verb while another conversation verb was
	already outstanding. Only one outstanding conversation verb can be issued at a
	time on any conversation.
	
	or
	
	  primary_rc = F006 (AP_THREAD_BLOCKING)
	
	The local TP issued a call while the calling thread is already processing a
	blocking call.
	
	0x14 (EHNAPPC_PARMCHKINVALIDVERB)
	
	SNA Server does not return this error.
	
	0x15 (EHNAPPC_PARMCHKINVALIDCONVERID)
	
	  primary_rc   = 0001 (AP_PARAMETER_CHECK)
	  secondary_rc = 00000002 (AP_BAD_CONV_ID)
	
	The local TP specified an invalid conversation ID to APPC.
	
	0x16 (EHNAPPC_PARMCHKBUFFERCROSSSEG)
	
	SNA Server does not return this error.
	
	0x17 (EHNAPPC_PARMCHKTPNAMELENGTH)
	
	  primary_rc   = 0001 (AP_PARAMETER_CHECK)
	  secondary_rc = 00000001 (AP_BAD_TP_ID)
	
	The local TP specified an invalid transaction program ID to APPC.
	
	0x18 (EHNAPPC_PARMCHKINVCONVERTYPE)
	
	  primary_rc   = 0001 (AP_PARAMETER_CHECK)
	  secondary_rc = 00000011 (AP_BAD_CONV_TYPE)
	
	The local TP specified an invalid conversation type to APPC.
	
	0x19 (EHNAPPC_PARMCHKBADSYNCLVLALLOC)
	
	  primary_rc   = 0001 (AP_PARAMETER_CHECK)
	  secondary_rc = 00000012 (AP_BAD_SYNC_LEVEL)
	
	The local TP specified an invalid sync level to APPC.
	
	0x1A (EHNAPPC_PARMCHKBADRETURNCTRL)
	
	  primary_rc   = 0001 (AP_PARAMETER_CHECK)
	  secondary_rc = 00000014 (AP_BAD_RETURN_CONTROL)
	
	The local TP specified an invalid return control value to APPC.
	
	0x1B (EHNAPPC_PARMCHKPIPTOOLONG)
	
	  primary_rc   = 0001 (AP_PARAMETER_CHECK)
	  secondary_rc = 00000016 (AP_PIP_LEN_INCORRECT)
	
	The local TP specified a PIP data length value greater than 32767.
	
	0x1C (EHNAPPC_PARMCHKBADPARTNERNAME)
	
	  primary_rc   = 0001 (AP_PARAMETER_CHECK)
	  secondary_rc = 00000018 (AP_UNKNOWN_PARTNER_MODE)
	
	The local TP specified an APPC mode name which is not defined in SNA Server.
	
	or
	
	  primary_rc   = 0001 (AP_PARAMETER_CHECK)
	  secondary_rc = 0000015B (AP_BAD_PARTNER_LU_ALIAS)
	
	The local TP specified a partner LU alias which is not defined in SNA Server.
	
	0x1D (EHNAPPC_PARMCHKCONFNOTALLOWED)
	
	  primary_rc   = 0001 (AP_PARAMETER_CHECK)
	  secondary_rc = 00000031 (AP_CONFIRM_ON_SYNC_LEVEL_NONE)
	
	The local TP tried to issue [MC_]CONFIRM in a conversation with a synchronization
	level of AP_NONE.
	
	0x1E (EHNAPPC_PARMCHKBADEALLOCTYPE)
	
	  primary_rc   = 0001 (AP_PARAMETER_CHECK)
	  secondary_rc = 00000051 (AP_DEALLOC_BAD_TYPE)
	
	The local TP specified a deallocation type which is not valid.
	
	0x1F (EHNAPPC_PARMCHKPREPTORCVTYPE)
	
	  primary_rc   = 0001 (AP_PARAMETER_CHECK)
	  secondary_rc = 000000A1 (AP_P_TO_R_INVALID_TYPE)
	
	The local TP specified a ptr_type parameter which is not valid.
	
	0x20 (EHNAPPC_PARMCHKBADFILLTYPE)
	
	  primary_rc   = 0001 (AP_PARAMETER_CHECK)
	  secondary_rc = 000000B5 (AP_RCV_AND_WAIT_BAD_FILL)
	          = 000000C4 (AP_RCV_IMMD_BAD_FILL)
	            000000D5 (AP_RCV_AND_POST_BAD_FILL)
	
	The local TP specified a fill parameter which is not valid.
	
	0x21 (EHNAPPC_CHKRECMAXLEN)
	
	SNA Server does not return this error.
	
	0x22 (EHNAPPC_PARMCHKUNKNOWNSECTYPE)
	
	  primary_rc   = 0001 (AP_PARAMETER_CHECK)
	  secondary_rc = 00000013 (AP_BAD_SECURITY)
	
	The local TP specified a security value which is not valid.
	
	0x23 (EHNAPPC_PARMCHKRESFLDNOTZERO)
	
	SNA Server does not return this error.
	
	0x28 (EHNAPPC_STATECHKNOTINCONFSTAT)
	
	  primary_rc   = 0002 (AP_STATE_CHECK)
	  secondary_rc = 00000033 (AP_CONFIRM_NOT_LL_BDY)
	          = 00000032 (AP_CONFIRM_BAD_STATE)
	          = 00000041 (AP_CONFIRMED_BAD_STATE)
	
	The local TP issued a SEND call though the conversation was not in a SEND state,
	or the conversation was in a SEND state and the local TP did not finish sending
	a logical record.
	
	0x29 (EHNAPPC_STATECHKNOTINRECEIVE)
	
	  primary_rc   = 0002 (AP_STATE_CHECK)
	  secondary_rc = 000000C1 (AP_RCV_IMMD_BAD_STATE)
	          = 000000D2 (AP_RCV_AND_POST_NOT_LL_BDY)
	          = 000000B2 (AP_RCV_AND_WAIT_NOT_LL_BDY)
	          = 000000D1 (AP_RCV_AND_POST_BAD_STATE)
	          = 000000B1 (AP_RCV_AND_WAIT_BAD_STATE)
	
	The local TP issued a RECEIVE call though the conversation was in a RECEIVE
	state.
	
	0x2A (EHNAPPC_STATECHKREQSNDBADSTAT)
	
	  primary_rc   = 0002 (AP_STATE_CHECK)
	  secondary_rc = 000000E1 (AP_R_T_S_BAD_STATE)
	
	The conversation was not in the allowed state when the local TP issued this
	call.
	
	0x2B (EHNAPPC_STATECHKSNDINBADSTATE)
	
	  primary_rc   = 0002 (AP_STATE_CHECK)
	  secondary_rc = 000000A2 (AP_P_TO_R_NOT_LL_BDY)
	          = 00000055 (AP_DEALLOC_NOT_LL_BDY)
	          = 000000F6   (AP_SEND_DATA_NOT_LL_BDY)
	          = 00000061   (AP_FLUSH_NOT_SEND_STATE)
	          = 000000A3   (AP_P_TO_R_NOT_SEND_STATE)
	          = 00000052   (AP_DEALLOC_FLUSH_BAD_STATE)
	          = 00000053   (AP_DEALLOC_CONFIRM_BAD_STATE)
	          = 000000F2   (AP_SEND_DATA_NOT_SEND_STATE)
	
	The conversation was not in the allowed state when the local TP issued this
	call.
	
	0x2C (EHNAPPC_STATECHKSNDERRBADSTAT)
	
	SNA Server does not return this error
	
	0x32 (EHNAPPC_ALLOCERRNORETRY)
	
	  primary_rc   = 0003 (AP_ALLOCATION_ERROR)
	  secondary_rc = 00000004  (AP_ALLOCATION_FAILURE_NO_RETRY)
	
	The LU6.2 session being requested could not be activated due to a permanent error
	condition, such as a configuration mismatch between SNA Server and the remote
	system.
	
	See the Knowledge Base article "Troubleshooting common APPC error codes" for more
	information about this error.
	
	or
	
	  primary_rc   = 0010 (AP_CONV_FAIL_NO_RETRY)
	
	The conversation terminated because of a permanent condition, such as a session
	protocol error. The Windows NT application event log should be reviewed to
	determine the cause of the error.
	
	0x33 (EHNAPPC_ALLOCERRRETRY)
	
	  primary_rc   = 0003 (AP_ALLOCATION_ERROR)
	  secondary_rc = 00000005  (AP_ALLOCATION_FAILURE_RETRY)
	
	The LU6.2 session being requested could not be activated due to a temporary error
	condition, such as a connection which is not activating. See the Knowledge Base
	article "Troubleshooting common APPC error codes" for more information about
	this error.
	
	or
	
	  primary_rc   = 000F (AP_CONV_FAIL_RETRY)
	
	The conversation terminated because of a temporary error, such as a dropped
	connection. Restart the TP to see if the problem occurs again. If it does, the
	Windows NT application event log should be reviewed to determine the cause of
	the error.
	
	0x34 (EHNAPPC_ALLOCERRPGMNOTAVAILNR)
	
	  primary_rc   = 0003 (AP_ALLOCATION_ERROR)
	  secondary_rc = 084C0000 (AP_TRANS_PGM_NOT_AVAIL_NO_RETRY)
	
	The partner LU rejected the allocation request because it was unable to start the
	requested partner TP. This condition may be temporary. The reason for the error
	may be logged on the remote system.
	
	0x35 (EHNAPPC_ALLOCERRTPNNOTRECOG)
	
	  primary_rc   = 0003 (AP_ALLOCATION_ERROR)
	  secondary_rc = 10086021 (AP_TP_NAME_NOT_RECOGNIZED)
	
	The partner LU does not recognize the TP name specified in the allocation
	request. Check the configuration of the remote system.
	
	0x36 (EHNAPPC_ALLOCERRPGMNOTAVAILR)
	
	  primary_rc   = 0003 (AP_ALLOCATION_ERROR)
	  secondary_rc = 084B6031  (AP_TRANS_PGM_NOT_AVAIL_RETRY)
	
	The partner LU rejected the allocation request because it was unable to start the
	requested partner TP. This condition is permanent, such as a configuration
	problem on the remote system. The reason for the error may be logged on the
	remote system.
	
	0x37 (EHNAPPC_ALLOCERRSECNOTVALID)
	
	  primary_rc   = 0003 (AP_ALLOCATION_ERROR)
	  secondary_rc = 080F6051 (AP_SECURITY_NOT_VALID)
	
	The user ID or password specified in the allocation request was not accepted by
	the partner LU. Check that the user ID and password were entered correctly, or
	confirm the user ID and password configured on the remote system.
	
	0x38 (EHNAPPC_ALLOCERRCONVTYP)
	
	  primary_rc   = 0003 (AP_ALLOCATION_ERROR)
	  secondary_rc = 10086034 (AP_CONVERSATION_TYPE_MISMATCH)
	
	The partner LU or TP does not support the conversation type (Basic or Mapped)
	specified in the allocation request.
	
	0x39 (EHNAPPC_ALLOCERRPIPNOTALLOWED)
	
	  primary_rc   = 0003 (AP_ALLOCATION_ERROR)
	  secondary_rc = 10086031 (AP_PIP_NOT_ALLOWED)
	
	The allocation request specified PIP data, but either the partner TP does not
	require this data, or the partner LU does not support it.
	
	0x3A (EHNAPPC_ALLOCERRPIPNOTCORRECT)
	
	  primary_rc   = 0003 (AP_ALLOCATION_ERROR)
	  secondary_rc = 10086032 (AP_PIP_NOT_SPECIFIED_CORRECTLY)
	
	The partner TP requires PIP data, but the allocation request specified either no
	PIP data or an incorrect number of parameters.
	
	0x3B (EHNAPPC_ALLOCERRSYNCHLEVEL)
	
	  primary_rc   = 0003 (AP_ALLOCATION_ERROR)
	  secondary_rc = 10086041  (AP_SYNC_LEVEL_NOT_SUPPORTED)
	
	The partner TP does not support the sync_level (AP_NONE or AP_CONFIRM_SYNC_LEVEL)
	specified in the allocation request, or the sync_level was not recognized.
	
	0x46 (EHNAPPC_DEALLOCABENDPROGRAM)
	
	  primary_rc = 0005 (AP_DEALLOC_ABEND)
	
	or
	
	  primary_rc = 0007 (AP_DEALLOC_ABEND_SVC)
	
	or
	
	  primary_rc = 0008 (AP_DEALLOC_ABEND_TIMER)
	
	The conversation has been deallocated for one of the following reasons:
	
	- the partner TP issued MC_DEALLOCATE with an ABEND type.
	
	- the partner TP has failed abnormally, causing the partner LU to send an
	  MC_DEALLOCATE request.
	
	- the SNA client software's LAN session to the SNA Server was lost, causing
	  APPC to return this error to the local TP.
	
	Check the Windows NT application event log for an error. If Event 38 is logged
	with a qualifier of 0005, then the client-server LAN session may have been
	lost.
	
	0x47 (EHNAPPC_INSUFFICIENTMEMORY)
	
	SNA Server does not return this error.
	
	0x48 (EHNAPPC_MEMORYALLOCERROR)
	
	  primary_rc = F008 (AP_INVALID_VERB_SEGMENT)
	
	The local TP specified an invalid verb control block to APPC.
	
	or
	
	  primary_rc = F011 (AP_UNEXPECTED_DOS_ERROR)
	
	The operating system, network operating system, or SNA client software returned
	an error to APPC while processing the APPC call from the local TP.
	
	or
	
	  primary_rc = F015 (AP_STACK_TOO_SMALL)
	
	The stack size of the local application is too small to execute the APPC call.
	Increase the stack size of the application.
	
	0x49 (EHNAPPC_TOOMANYCONVERSATIONS)
	
	SNA Server does not return this error.
	
	0x4A (EHNAPPC_CONVTABLEFULL)
	
	SNA Server does not return this error.
	
	0x4B (EHNAPPC_ROUTERNOTINSTALLED)
	
	  primary_rc = F003  (AP_COMM_SUBSYSTEM_ABENDED)
	
	This indicates one of the following errors:
	
	- The LAN connection between the SNA client and the server has been broken. A
	  LAN network trace may be needed to troubleshoot this problem.
	
	- The SNA Server service has failed abnormally.
	
	- The SNA client running on the local machine has failed abnormally.
	
	or
	
	  primary_rc = F004  (AP_COMM_SUBSYSTEM_NOT_LOADED)
	
	See the following Knowledge Base article for information on this error:
	
	  Q148359 SNA Server APPC Error: F004 AP_COMM_SUBSYSTEM_NOT_LOADED
	
	0x4C (EHNAPPC_ROUTERWRONGLEVEL)
	
	SNA Server does not return this error.
	
	0x4D (EHNAPPC_PCWINNOTLOADED)
	
	SNA Server does not return this error.
	
	0x4E (EHNAPPC_PCSWINOUTOFMEMORY)
	
	SNA Server does not return this error.
	
	0x4F (EHNAPPC_INVALIDUSERIDLEN)
	
	SNA Server does not return this error.
	
	0x50 (EHNAPPC_INVALIDPASSWORDLEN)
	
	SNA Server does not return this error.
	
	0x51 (EHNAPPC_INVALIDLUNAME)
	
	primary_rc   = 0001 (AP_PARAMETER_CHECK)
	secondary_rc = 00000003 (AP_BAD_LU_ALIAS)
	
	The SNA Server Enhanced Router is configured with a local LU alias which is not
	defined in SNA Server. The Local LU alias is configured in the following entry
	in WIN.INI:
	
	  [SnaServerEHNAPPC]
	      LocalLU = <LocalLUAlias>
	
	where <LocalLUAlias> is the Local LU alias (without the "<" ">").
	Make sure this Local LU alias is configured in SNA Server.
	
	0x63 (EHNAPPC_UNDEFINED)
	
	This default error is returned by SNA Server for all other WINAPPC error
	conditions. Specific errors that fall into this category are:
	
	  primary_rc   = 0001 (AP_PARAMETER_CHECK)
	  secondary_rc = 000000D6 (AP_INVALID_SEMAPHORE_HANDLE)
	                 00000006 (AP_INVALID_DATA_SEGMENT)
	                 00000017 (AP_NO_USE_OF_SNASVCMG)
	                 00000057 (AP_DEALLOC_LOG_LL_WRONG)
	                 000000D7 (AP_BAD_RETURN_STATUS_WITH_DATA)
	                 000000F1 (AP_BAD_LL)
	                 000000F4 (AP_SEND_DATA_INVALID_TYPE)
	             00000512 (AP_INVALID_SESSION_ID)
	             000000F5 (AP_SEND_DATA_CONFIRM_SYNC_NONE)
	             00000102 (AP_SEND_ERROR_LOG_LL_WRONG)
	             00000103 (AP_SEND_ERROR_BAD_TYPE)
	             00000105 (AP_BAD_ERROR_DIRECTION)
	             00000243 (AP_TOO_MANY_TPS)
	             00000250  (AP_BAD_TYPE)
	             00000506 (AP_UNDEFINED_TP_NAME)
	
	  primary_rc   = 0002 (AP_STATE_CHECK)
	  secondary_rc = 00000508 (AP_ATTACH_MANAGER_INACTIVE)
	             00000509  (AP_ALLOCATE_NOT_PENDING)
	             00000525  (AP_INVALID_PROCESS)
	
	  primary_rc = 0019 (AP_CONVERSATION_TYPE_MIXED)
	
	  primary_rc = 0021 (AP_CANCELLED)
	
	  primary_rc = FFFF (AP_INVALID_VERB)
	
	
	Additional query words: 2.00 2.10 2.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11 SP1;2.11 SP2,3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
